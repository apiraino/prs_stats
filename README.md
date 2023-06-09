## Build data about PRs lifecycle

## Discussion in these Zulip streams:

- [#general > PR tracking](https://rust-lang.zulipchat.com/#narrow/stream/122651-general/topic/PR.20tracking)
- [#t-compiler > review latency meeting planning](https://rust-lang.zulipchat.com/#narrow/stream/131828-t-compiler/topic/review.20latency.20meeting.20planning)
- [#t-compiler > reducing PR review time](https://rust-lang.zulipchat.com/#narrow/stream/131828-t-compiler/topic/Reducing.20PR.20review.20time)

## Requirements && install

Data retrieval and parsing:

- Needs Python 3.x. Create a virtualenv and install the packages:
``` sh
$ virtualenv venv
$ source venv/bin/activate
(venv) $ pip install -r requirements.txt
```

Website presentation:

- Needs npm LTS. This should install the needed packagesa and start server on http://localhost:8000
``` sh
npm run dev
```

- Compile with:

``` sh
sh update_dist.sh
```

Output files are in `./prs_stats`. Test deployed compiled .js with any http local server, ex. `python -m http.server` and then open `http://localhost:8000/prs_stats`.

## Scripts

These scripts will fetch and process the pull requests data. Directory `./src/data` constains all .json files used by the website.

Use `move-stats.sh` to move the JSON files into the proper folders.

Use `import-data.py` to generate the .js file to be included in the HTML pages.

1. Download the entire PRs corpus from [rust-lang/rust](https://github.com/rust-lang/rust/pulls) (+6K pull requests, will take hours! Final dump is about 1GB uncompressed)

``` sh
./get-all-prs.py (with sorting by date)
```

2. How long do stay PRs open before being closed?

``` sh
# filters all PRs in Q1/2023
# output: a file for each team
./filter-prs-by-date.py 2023-01-01 2023-04-30
```

3. How many PRS are against issues?

``` sh
# get all connected issues to PRs in Q1/2023
# output: a file for each team
./get-regression-issue-for-prs.py 2023-01-01 2023-04-30
```

## TODOs

- download only delta of data
- set/get a bookmark when downloading data in case the process is interrupted
- <del>alternate API tokens to work around throttling</del> (does not work)
- <del>reduce noise by excluding time elapsed from `r+` to actual issue closing</del> (maybe not, there's activity happening also after the `r+`, often enough that we don't want to ignore it)
- why is a PR actually taking long to be closed? Give evidence if there was a lot of discussion and comments or was just sitting there unattended
- maybe overlay candle/violin representation of max,min,avg in PRs age ([see here how](https://github.com/jackh726/rust-pr-explorer/commit/7f9567b73debeff6afa0be3899ed13b8c2c2eedf#diff-26ad4b834941d9b19ebf9db8082bd202aaf72ea0ddea85f5a8a0cb3c729cc6f2R377))

## Frontend to set your review capacity

https://hackmd.io/GqXA4nyTQ4m__hRZUayVRg

Goals:
- Build a simple web page deployed somewhere on github rust-lang org with a few knobs for reviewers to change their settings
- nobody needs to manually edit [this file](https://github.com/rust-lang/team/blob/master/teams/compiler.toml) to set themself in or out the rotation

Tasks (more or less):
- BE: save settings into the triagebot DB (detail DB table fields)
- BE: settings for each contributor:
    - # open PR assigned (with list? with last comment timestamp?)
    - max # open pr assigned
    - PTO start
    - PTO end
    - "ping me after X days"
    - agree to make these settings visible to the team? (opt-in)
- BE: triagebot reads the local DB before assigning the reviewer
- Nice to have: change these settings directly from Zulip (see HackMD linked above)
