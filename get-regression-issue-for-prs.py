#!/usr/bin/env python3

from utils import *

SRC_FILE = "prs.json"


if len(sys.argv) < 2:
    bail_out(
        "./get-regression-issue-for-prs.py <from: YYYY-MM-DD> <to: YYYY-MM-DD> > data.dat"
    )

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

for pr in data:
    obj = {}
    output = {}
    issue = 0
    # last_pr = get_bookmark(pr["number"])
    _close = datetime.strptime(pr["closed_at"], date_format)
    if _close < from_date or _close > to_date:
        continue
    # skip rollups
    if pr["title"].startswith("Rollup"):
        continue
    # eprintln("Closing date: {}".format(_close))
    curr_week = _close.strftime("%W")
    eprintln("\nCurrent week is {}".format(curr_week))
    labels = [x["name"] for x in pr["labels"]]
    labels.sort()

    if "T-compiler" in labels:
        output = output_tcompiler
    if "T-rustdoc" in labels:
        output = output_trustdoc
    if "T-libs" in labels or "T-libs-api" in labels:
        output = output_tlibs
        if "T-compiler" in labels:
            output = output_tcompiler_tlibs

    # retrieve an issue connected to this PR
    issue = get_regression_issue(pr["number"])
    if issue == ERR_GIVEUP:
        # we're probably throttled
        # exit and save everything we got until now
        break

    # dump week data
    # check if we already have this week in the global counter
    # if NOT: create a new object and add it to the counter
    # if YES: retrieve the week object from the counter and increment it

    # look if we already have this week in the global counter
    idx = [x for x in output if x == curr_week]
    if not idx:
        # initialize a new week obj
        obj = {"num_prs": 1, "num_bugfixes": issue}
    else:
        # increment counter for an existing week in the global counter
        idx = idx[0]
        obj = {
            "num_prs": output[idx]["num_prs"] + 1,
            "num_bugfixes": output[idx]["num_bugfixes"] + issue,
        }

    # add data point to the global counter
    output.update({curr_week: obj})
    eprintln("[W{}] {}".format(curr_week, obj))
    # set_bookmark(pr["num"])

# we assume to work on a single year
year = from_date.strftime("%Y")
for _out in [output_tcompiler, output_tlibs, output_trustdoc, output_tcompiler_tlibs]:
    dst_file = "ooops.json"
    if _out == output_tcompiler:
        dst_file = "{}_tcompiler_contrast_prs_bugfixes.json".format(year)
    if _out == output_tlibs:
        dst_file = "{}_tlibs_contrast_prs_bugfixes.json".format(year)
    if _out == output_trustdoc:
        dst_file = "{}_trustdoc_contrast_prs_bugfixes.json".format(year)
    if _out == output_tcompiler_tlibs:
        dst_file = "{}_tcompiler_tlibs_contrast_prs_bugfixes.json".format(year)

    json_data = []
    for w in _out:
        obj = {
            "woy": w,
            "num_prs": _out[w]["num_prs"],
            "num_bugfixes": _out[w]["num_bugfixes"],
        }
        json_data.append(obj)
    # sort by week of year
    json_data.sort(key=lambda item: item["woy"])
    # print(json.dumps(json_data))

    with open(dst_file, "w") as f:
        f.write(json.dumps(json_data))
        eprintln("File {} saved".format(dst_file))

eprintln("FINISHED")
