#!/usr/bin/env python3

import os
import sys
from datetime import date, datetime
from time import sleep
import json
import requests
import re

import pudb

from gql import Client, gql
from gql.transport.requests import RequestsHTTPTransport
from gql.transport.exceptions import TransportQueryError

API_URL = "https://api.github.com"
API_TOKEN = os.getenv("API_TOKEN")
# between pages to reduce chances of being throttled
WAIT_SECS = 0.2
PER_PAGE = 50
# when I get throttled, try this many timwes then adbicate and save the data so far
MAX_TRIES_WHEN_THROTTLED = 5
ERR_GIVEUP = -1
RETRY = -2

headers = {
    "Authorization": "Bearer {}".format(API_TOKEN),
    "Content-Type": "application/json",
    "Accept": "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": "2022-11-28",
}

transport = RequestsHTTPTransport(
    url="{}/graphql".format(API_URL),
    auth=("Basic", API_TOKEN),
    verify=True,
    retries=3,
)

client = Client(transport=transport, fetch_schema_from_transport=True)


def bail_out(msg, err_code=0):
    print(msg)
    sys.exit(err_code)


def eprintln(msg):
    sys.stderr.write("{}\n".format(msg))


def get_review_comments(review_comment_url):
    tries = 0
    res = RETRY
    while res == RETRY:
        res = _get_review_comments(review_comment_url)
        if tries >= MAX_TRIES_WHEN_THROTTLED:
            return ERR_GIVEUP
        tries = tries + 1
    return res


def _get_review_comments(review_comments_url):
    url = "{}?per_page={}".format(review_comments_url, PER_PAGE)
    r = requests.get(url, headers=headers)
    if r.status_code != 200:
        if r.status_code == 422:
            return RETRY
        else:
            r.raise_for_status()
    return r.json()


def get_pr_commits(commits_url):
    pass


def in_range(dt, _from, _to):
    return dt > _from and dt < _to


def get_regression_issue(pr_num):
    tries = 0
    res = RETRY
    while res == RETRY:
        res = _get_regression_issue(pr_num)
        if tries >= MAX_TRIES_WHEN_THROTTLED:
            eprintln("ERROR: give up, we're being throttled :(")
            return ERR_GIVEUP
        sleep(WAIT_SECS)
        tries = tries + 1
    return res


def _get_regression_issue(pr_num):
    query = f"""query Test2 {{repository(owner: "rust-lang", name: "rust") {{pullRequest(number: {pr_num}) {{closingIssuesReferences(first: 10) {{nodes {{number}}}}}}}}}}"""
    query = gql(query)
    try:
        result = client.execute(query)
    except TransportQueryError as e:
        # gql.transport.exceptions.TransportQueryError: {'type': 'RATE_LIMITED', 'message': 'API rate limit exceeded for user ID 123456.'}
        if e.errors[0]["type"] == "RATE_LIMITED":
            eprintln("WARNING: retrying #{} (we're being throttled)".format(pr_num))
            return RETRY
        else:
            eprintln("Error from the remote host: {}".format(e))

    # print(result)
    nodes = result["repository"]["pullRequest"]["closingIssuesReferences"]["nodes"]
    if nodes:
        eprintln("PR #{} has issue #{} linked".format(pr_num, nodes[0]["number"]))
        return 1
    eprintln("PR #{} has NO issue linked".format(pr_num))
    return 0
