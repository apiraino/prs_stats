#!/usr/bin/env python3

from utils import *

SRC_FILE = "prs.json"


def bail_out(msg, err_code=0):
    print(msg)
    sys.exit(err_code)


def eprintln(msg):
    sys.stderr.write("{}\n".format(msg))


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
output = {}

for pr in data:
    obj = {}
    issue = 0
    _close = datetime.strptime(pr["closed_at"], date_format)
    if _close < from_date or _close > to_date:
        continue
    # eprintln("Closing date: {}".format(_close))
    curr_week = _close.strftime("%W")
    eprintln("\nCurrent week is {}".format(curr_week))

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

json_data = []
for w in output:
    obj = {
        "woy": w,
        "num_prs": output[w]["num_prs"],
        "num_bugfixes": output[w]["num_bugfixes"],
    }
    json_data.append(obj)

# sort by week of year
json_data.sort(key=lambda item: item["woy"])
print(json.dumps(json_data))
