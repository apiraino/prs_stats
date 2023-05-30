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


# How long are PRs sitting before being closed?
for pr in data:
    obj = []
    output = {}
    _close = datetime.strptime(pr["closed_at"], date_format)
    if _close < from_date or _close > to_date:
        continue
    # Skip rollup PRs
    if pr["title"].startswith("Rollup"):
        continue
    curr_week = _close.strftime("%W")
    # ex. ['T-compiler', 'S-waiting-on-bors', 'merged-by-bors']
    labels = [x["name"] for x in pr["labels"]]
    labels.sort()

    # somewhat loose team classification, not 100% correct
    if "T-compiler" in labels:
        output = output_tcompiler
    elif "T-rustdoc" in labels:
        output = output_trustdoc
    elif "T-libs" in labels or "T-libs-api" in labels:
        output = output_tlibs
        if "T-compiler" in labels:
            output = output_tcompiler_tlibs

    # calculate how many days has been this PR open
    _create = datetime.strptime(pr["created_at"], date_format)
    days_open = (_close - _create).days

    # dump week data
    # check if we already have this week in the global counter
    # if NOT: create a new object and add it to the counter
    # if YES: retrieve the week object from the counter and increment it

    # look if we already have this week in the global counter
    idx = [x for x in output if x == curr_week]
    if not idx:
        # initialize a new week obj
        obj = [days_open]
    else:
        # add a new new number
        idx = idx[0]
        obj = output[idx]
        obj.append(days_open)
        if obj is None:
            break

    # dump week data
    output.update({curr_week: obj})
    total_prs = total_prs + 1

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
        obj = {"woy": w, "days_open": _out[w]}
        json_data.append(obj)
    # sort by week of year
    json_data.sort(key=lambda item: item["woy"])

    with open(dst_file, "w") as f:
        f.write(json.dumps(json_data))
        eprintln("File {} saved".format(dst_file))

eprintln("FINISHED")
