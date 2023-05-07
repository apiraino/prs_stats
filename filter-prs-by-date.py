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
# prev_week = None

# up to X days
time_1 = 10
# up to Y days
time_2 = 30
# over Z days
time_3 = 60

# counter_1 = 0
# counter_2 = 0
# counter_3 = 0

# How long are PRs sitting before being closed?
for pr in data:
    obj = {}
    counter_1 = 0
    counter_2 = 0
    counter_3 = 0
    _close = datetime.strptime(pr["closed_at"], date_format)
    if _close < from_date or _close > to_date:
        continue
    eprintln("Closing date: {}".format(_close))
    curr_week = _close.strftime("%W")
    # if not prev_week:
    #     prev_week = curr_week
    # eprintln("Week is {}".format(curr_week))

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

    # dump week data and reset counters for the new week
    output.update({curr_week: obj})
    eprintln(
        "[W{}] {} {} {}".format(
            curr_week,
            counter_1,
            counter_2,
            counter_3,
        )
    )
    # counter_1 = 0
    # counter_2 = 0
    # counter_3 = 0

    # _create = datetime.strptime(pr["created_at"], date_format)
    # days_open = (_close - _create).days
    # eprintln(
    #     "{} #{} closed on {} was open for {}d".format(
    #         curr_week, pr["number"], _close.strftime(date_fmt), days_open
    #     )
    # )
    # if days_open <= time_1:
    #     counter_1 = counter_1 + 1
    # elif time_2 > days_open < time_3:
    #     counter_2 = counter_2 + 1
    # else:
    #     counter_3 = counter_3 + 1
    # prev_week = curr_week

json_data = []
for w in output:
    obj = {
        "woy": w,
        "up_to_10": output[w]["time_1"],
        "up_to_30": output[w]["time_1"] + output[w]["time_2"],
        "over_60": output[w]["time_1"] + output[w]["time_2"] + output[w]["time_3"],
    }
    json_data.append(obj)

    # for GNUplot
    # print(
    #     "{} {} {} {}".format(
    #         k,
    #         output[k]["time_1"],
    #         output[k]["time_1"] + output[k]["time_2"],
    #         output[k]["time_1"] + output[k]["time_2"] + output[k]["time_3"],
    #     )
    # )

# sort by week of year
json_data.sort(key=lambda item: item["woy"])
print(json.dumps(json_data))
