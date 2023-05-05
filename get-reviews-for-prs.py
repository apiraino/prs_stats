#!/usr/bin/env python3

from utils import *

SRC_FILE = "prs.json"

if not API_TOKEN:
    bail_out("Missing API_TOKEN")

if len(sys.argv) < 2:
    bail_out("./get-reviews-for-prs.py <from: YYYY-MM-DD> <to: YYYY-MM-DD> > data.dat")

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


# Q2: How many reviewers and reviews have there been?
# Q4: How long between reviews?
# Q5: What are the state changes during the lifecycle of a PR?
date_format = "%Y-%m-%dT%H:%M:%SZ"
for pr in data:
    _close = datetime.strptime(pr["closed_at"], date_format)
    if not in_range(_close, from_dt, to_dt):
        continue
    comments = get_review_comments(pr["number"]["review_comments_url"])
    num_reviews = 0
    reviewers = []
    for c in comments:
        num_reviews += 1
        reviewers.append(c["user"]["login"])

    print(
        "PR {} has {} reviews from: {}".format(
            pr["number"], num_reviews, ", ".join(set(reviewers))
        )
    )
