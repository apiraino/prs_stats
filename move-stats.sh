#!/usr/bin/env sh

# move source data files to their destination
# after moving these files run import_data.py

if [ -z "$1" ]; then
    echo missing year
    exit 1
fi

mv $1_tcompiler_prs_open_days.json src/data/t-compiler/$1_prs_open_days.json
mv $1_tlibs_prs_open_days.json src/data/t-libs/$1_prs_open_days.json
mv $1_trustdoc_prs_open_days.json src/data/t-rustdoc/$1_prs_open_days.json
# how about this?
# mv $1_tcompiler_tlibs_prs_open_days.json

mv $1_tcompiler_contrast_prs_bugfixes.json src/data/t-compiler/$1_contrast_prs_bugfixes.json
mv $1_tlibs_contrast_prs_bugfixes.json src/data/t-libs/$1_contrast_prs_bugfixes.json
mv $1_trustdoc_contrast_prs_bugfixes.json src/data/t-rustdoc/$1_contrast_prs_bugfixes.json
# mv $1_tcompiler_tlibs_contrast_prs_bugfixes.json src/data/???/$1_contrast_prs_bugfixes.json

echo
echo Done
