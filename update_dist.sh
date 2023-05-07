#!/usr/bin/env sh

npm run build

# only for local testing
# simulate where the github pages expect to find the files
cp -r docs prs_stats

# to update the github pages just git push the /docs directory
