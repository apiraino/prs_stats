#!/usr/bin/env sh

rm -rf dist docs prs_stats
npm run build

# only for local testing
# simulate where the github pages expect to find the files
cp -r docs prs_stats

# cp node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.min.js prs_stats/
# cp src/chart.umd.min.js prs_stats/

# git add docs *.html *.js *.map

# only from branch gh-pages
#git add docs
#git commit --amend -m 'Update HTML'
#git push -f
