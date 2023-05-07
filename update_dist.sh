#!/usr/bin/env sh

rm -rf docs prs_stats
npm run build

# only for local testing
# simulate where the github pages expect to find the files
cp -r docs prs_stats

# to update the website, just git push the /docs directory
