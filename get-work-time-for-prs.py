#!/usr/bin/env python3

from utils import *

SRC_FILE = "prs.json"

if len(sys.argv) < 2:
    bail_out(
        "./get-work-time-for-prs.py <from: YYYY-MM-DD> <to: YYYY-MM-DD> > data.dat"
    )

# YYYY-MM-DD
date_fmt = "%Y-%m-%d"
from_dt = datetime.strptime(sys.argv[1], date_fmt)
to_dt = datetime.strptime(sys.argv[2], date_fmt)
eprintln("Filtering PRs reviews: from {} to {}".format(from_dt, to_dt))


if not os.path.exists(SRC_FILE):
    bail_out("Source file {} missing. Run get-all-prs.py first".format(SRC_FILE))
else:
    with open(SRC_FILE) as f:
        eprintln("Loading {} ...".format(SRC_FILE))
        data = json.load(f)
        eprintln("Loaded")


# Q3: What is the work-time for PRs?
eprintln("Parsing {} PRs...".format(len(data)))
date_format = "%Y-%m-%dT%H:%M:%SZ"
json_data = []
for pr in data:
    _create = datetime.strptime(pr["created_at"], date_format)
    _close = datetime.strptime(pr["closed_at"], date_format)
    if not in_range(_close, from_dt, to_dt):
        continue
    # Skip rollups because they're automated jobs
    if pr["title"].startswith("Rollup"):
        continue
    dt = _close - _create
    woy = _close.strftime("%U")
    days_open = dt.days
    if days_open == 0 and (dt.seconds / 60) > 0:
        days_open = 1

    # for GNUplot
    print("W{} {} {}".format(woy, days_open, pr["number"]))

    obj = {
        "woy": w,
        "days_open": days_open,
        "pr_num": pr["number"],
    }
    json_data.append(obj)

# sort by week of year
json_data.sort(key=lambda item: item["woy"])
print(json.dumps(json_data))
