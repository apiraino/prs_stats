#!/usr/bin/env python3

from utils import *

# Retrieve a list of PRs

# checked the number on the github repo
TOTAL_CLOSED_PRS = 62341
PER_PAGE = 100
MAX_PAGES = TOTAL_CLOSED_PRS / PER_PAGE
# more or less observed
SECS_TO_GET_A_PAGE = 5
# Dump the json into this file
SRC_FILE = "prs.json"


def list_prs():
    # is:pr is:closed sort:created-asc draft:false label:T-compiler -created:<=2018-01-01 -created:>=2018-03-31
    # params = "q=is:pr+label:T-compiler+state:closed&sort=created&order=asc&per_page=100&page=1"
    # url = "{}/search/issues?{}".format(API_URL, params)

    output = []
    page = 1
    while page <= MAX_PAGES:
        sleep(WAIT_SECS)

        # search endpoint limited to 1000 results
        # created:2020-01-01..2020-12-31
        # params = "q=is:pr+label:T-compiler+state:closed+created:{}..{}&sort=updated&order=asc&per_page={}&page={}".format(
        #     from_date, to_date, PER_PAGE, page
        # )
        # url = "{}/search/issues?{}".format(API_URL, params)

        # list all PRs
        url = "{}/repos/rust-lang/rust/pulls?state=closed&direction=desc&sort=updated&per_page={}&page={}".format(
            API_URL, PER_PAGE, page
        )

        try:
            r = requests.get(url, headers=headers)
        except Exception as e:
            eprintln("Error while getting data: {}".format(e))
            eprintln("Bail out and save what we have -_-'")
            return output

        if r.status_code != 200:
            if r.status_code == 422:
                eprintln("We've been throttled. Waiting for {}s".format(WAIT_SECS))
                pu.db
                sleep(WAIT_SECS)
                # request the same page again
                # page = page - 1
                continue
            else:
                r.raise_for_status()
        data = r.json()
        output.extend(data)
        eprintln("Got page {}: #{} total prs".format(page, len(output)))
        page = page + 1
    return json.dumps(output)


if not os.path.exists(SRC_FILE):
    if not API_TOKEN:
        bail_out("Missing API_TOKEN")
    eprintln(
        "Data download for {} PRs, waiting {}s between pages, ETA: ~{} minutes".format(
            TOTAL_CLOSED_PRS,
            WAIT_SECS,
            round((MAX_PAGES * (SECS_TO_GET_A_PAGE + WAIT_SECS)) / 60),
        )
    )

    data = list_prs()
    eprintln("Writing data to {}".format(SRC_FILE))
    with open(SRC_FILE, "w") as f:
        f.write(data)
else:
    eprintln("File {} exists, won't rewrite it.".format(SRC_FILE))
