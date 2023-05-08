#!/usr/bin/env sh

# move a source data file in a specific year destination

mv trustdoc.json src/data/t-rustdoc/$1.json
mv tcompiler.json src/data/t-compiler/$1.json
mv tlibs.json src/data/t-libs/$1.json

# how about this?
# mv tcompiler_tlibs.json src/data/???/$1.json

echo
echo Moved files to: src/data/t-*/$1.json
