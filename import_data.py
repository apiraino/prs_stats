#!/usr/bin/env python3

import os

t_compiler_mappings = [
    ("./src/data/t-compiler/2023_prs_open_days.json", "data_prs_days_open_2023"),
    ("./src/data/t-compiler/2022_prs_open_days.json", "data_prs_days_open_2022"),
    ("./src/data/t-compiler/2021_prs_open_days.json", "data_prs_days_open_2021"),
    ("./src/data/t-compiler/2020_prs_open_days.json", "data_prs_days_open_2020"),
    #
    ("./src/data/t-compiler/2023_contrast_prs_bugfixes.json", "data_contrast_2023"),
    ("./src/data/t-compiler/2022_contrast_prs_bugfixes.json", "data_contrast_2022"),
    ("./src/data/t-compiler/2021_contrast_prs_bugfixes.json", "data_contrast_2021"),
]

t_libs_mappings = [
    ("./src/data/t-libs/2023_prs_open_days.json", "data_prs_days_open_2023"),
    ("./src/data/t-libs/2022_prs_open_days.json", "data_prs_days_open_2022"),
    ("./src/data/t-libs/2021_prs_open_days.json", "data_prs_days_open_2021"),
    ("./src/data/t-libs/2020_prs_open_days.json", "data_prs_days_open_2020"),
    #
    ("./src/data/t-libs/2023_contrast_prs_bugfixes.json", "data_contrast_2023"),
    ("./src/data/t-libs/2022_contrast_prs_bugfixes.json", "data_contrast_2022"),
    ("./src/data/t-libs/2021_contrast_prs_bugfixes.json", "data_contrast_2021"),
]

t_rustdoc_mappings = [
    ("./src/data/t-rustdoc/2023_prs_open_days.json", "data_prs_days_open_2023"),
    ("./src/data/t-rustdoc/2022_prs_open_days.json", "data_prs_days_open_2022"),
    ("./src/data/t-rustdoc/2021_prs_open_days.json", "data_prs_days_open_2021"),
    ("./src/data/t-rustdoc/2020_prs_open_days.json", "data_prs_days_open_2020"),
    #
    ("./src/data/t-rustdoc/2023_contrast_prs_bugfixes.json", "data_contrast_2023"),
    ("./src/data/t-rustdoc/2022_contrast_prs_bugfixes.json", "data_contrast_2022"),
    ("./src/data/t-rustdoc/2021_contrast_prs_bugfixes.json", "data_contrast_2021"),
]


def populate(dst_file, src_arr):
    with open(dst_file, "w") as out:
        for f, js_obj in src_arr:
            with open(f, "r") as fp:
                out.write("const {} = JSON.parse(`{}`);\n".format(js_obj, fp.read()))


populate("./src/js/data_prs_days_open.t-compiler.js", t_compiler_mappings)
populate("./src/js/data_prs_days_open.t-libs.js", t_libs_mappings)
populate("./src/js/data_prs_days_open.t-rustdoc.js", t_rustdoc_mappings)
