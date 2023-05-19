#!/usr/bin/env python3

from utils import *

SRC_FILE = "prs.json"

if len(sys.argv) < 2:
    bail_out("./filter-prs-by-date.py <from: YYYY-MM-DD> <to: YYYY-MM-DD> > data.dat")

if not os.path.exists(SRC_FILE):
    bail_out("Source file {} missing. Run get-all-prs.py first".format(SRC_FILE))
else:
    with open(SRC_FILE) as f:
        data = json.load(f)

# YYYY-MM-DD
date_fmt = "%Y-%m-%d"
from_date = datetime.strptime(sys.argv[1], date_fmt)
to_date = datetime.strptime(sys.argv[2], date_fmt)
eprintln("Filtering data: from {} to {}".format(from_date, to_date))
# ex. 2016-11-03T04:49:05Z
date_format = "%Y-%m-%dT%H:%M:%SZ"

output_tcompiler = {}
output_tlibs = {}
output_trustdoc = {}
output_tcompiler_tlibs = {}

# up to X days
time_1 = 10
# up to Y days
time_2 = 30
# over Z days
time_3 = 60

# How long are PRs sitting before being closed?
for pr in data:
    obj = {}
    output = {}
    counter_1 = 0
    counter_2 = 0
    counter_3 = 0
    _close = datetime.strptime(pr["closed_at"], date_format)
    if _close < from_date or _close > to_date:
        continue
    # Skip rollup PRs
    if pr["title"].startswith("Rollup"):
        continue
    eprintln("#{}: closing date: {}".format(pr["number"], _close))
    curr_week = _close.strftime("%W")
    # ex. ['T-compiler', 'S-waiting-on-bors', 'merged-by-bors']
    labels = [x["name"] for x in pr["labels"]]
    labels.sort()

    # XXX: isolate S-blocked closed pull requests
    # Should labelling be fixed?
    # if "S-blocked" in labels:
    #     eprintln("#{} labels: {}".format(pr["number"], labels))

    # somewhat loose team classification, not 100% correct
    # does not take into account all shades of grey
    if "T-compiler" in labels:
        output = output_tcompiler
    if "T-rustdoc" in labels:
        output = output_trustdoc
    if "T-libs" in labels or "T-libs-api" in labels:
        output = output_tlibs
        if "T-compiler" in labels:
            output = output_tcompiler_tlibs
    # eprintln("#{} label: {} so output is {}".format(pr["number"], labels, output))

    # calculate how many days has been this PR open
    _create = datetime.strptime(pr["created_at"], date_format)
    days_open = (_close - _create).days
    eprintln(
        "{} #{} closed on {} was open for {}d".format(
            curr_week, pr["number"], _close.strftime(date_fmt), days_open
        )
    )

    # calculate counter of days open
    if days_open <= time_1:
        counter_1 = 1
    elif time_2 > days_open < time_3:
        counter_2 = 1
    else:
        counter_3 = 1

    # dump week data
    # check if we already have this week in the global counter
    # if NOT: create a new object and add it to the counter
    # if YES: retrieve the week object from the counter and increment it

    # look if we already have this week in the global counter
    idx = [x for x in output if x == curr_week]
    if not idx:
        # initialize a new week obj
        obj = {
            "time_1": counter_1,
            "time_2": counter_2,
            "time_3": counter_3,
        }
    else:
        # increment counter for an existing week in the global counter
        idx = idx[0]
        obj = {
            "time_1": output[idx]["time_1"] + counter_1,
            "time_2": output[idx]["time_2"] + counter_2,
            "time_3": output[idx]["time_3"] + counter_3,
        }

    # dump week data
    output.update({curr_week: obj})

# we assume to always pull data inside the same year
year = from_date.strftime("%Y")
for _out in [output_tcompiler, output_tlibs, output_trustdoc, output_tcompiler_tlibs]:
    dst_file = "ooops.json"
    if _out == output_tcompiler:
        dst_file = "{}_tcompiler_prs_open_days.json".format(year)
    if _out == output_tlibs:
        dst_file = "{}_tlibs_prs_open_days.json".format(year)
    if _out == output_trustdoc:
        dst_file = "{}_trustdoc_prs_open_days.json".format(year)
    if _out == output_tcompiler_tlibs:
        dst_file = "{}_tcompiler_tlibs_prs_open_days.json".format(year)

    json_data = []
    for w in _out:
        obj = {
            "woy": w,
            "up_to_10": _out[w]["time_1"],
            "up_to_30": _out[w]["time_1"] + _out[w]["time_2"],
            "over_60": _out[w]["time_1"] + _out[w]["time_2"] + _out[w]["time_3"],
        }
        json_data.append(obj)
    # sort by week of year
    json_data.sort(key=lambda item: item["woy"])
    # print(json.dumps(json_data))

    with open(dst_file, "w") as f:
        f.write(json.dumps(json_data))
        eprintln("File {} saved".format(dst_file))

eprintln("FINISHED")
