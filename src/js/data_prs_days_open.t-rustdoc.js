const data_prs_days_open_2023 = JSON.parse(`[{"woy": "00", "up_to_10": 3, "up_to_30": 3, "over_60": 4}, {"woy": "01", "up_to_10": 23, "up_to_30": 23, "over_60": 23}, {"woy": "02", "up_to_10": 16, "up_to_30": 16, "over_60": 18}, {"woy": "03", "up_to_10": 14, "up_to_30": 14, "over_60": 15}, {"woy": "04", "up_to_10": 17, "up_to_30": 18, "over_60": 21}, {"woy": "05", "up_to_10": 12, "up_to_30": 13, "over_60": 16}, {"woy": "06", "up_to_10": 18, "up_to_30": 22, "over_60": 23}, {"woy": "07", "up_to_10": 22, "up_to_30": 26, "over_60": 26}, {"woy": "08", "up_to_10": 10, "up_to_30": 10, "over_60": 15}, {"woy": "09", "up_to_10": 8, "up_to_30": 10, "over_60": 10}, {"woy": "10", "up_to_10": 13, "up_to_30": 13, "over_60": 19}, {"woy": "11", "up_to_10": 13, "up_to_30": 14, "over_60": 15}, {"woy": "12", "up_to_10": 19, "up_to_30": 22, "over_60": 24}, {"woy": "13", "up_to_10": 11, "up_to_30": 13, "over_60": 14}, {"woy": "14", "up_to_10": 3, "up_to_30": 3, "over_60": 4}]`);
const data_prs_days_open_2022 = JSON.parse(`[{"woy": "00", "up_to_10": 2, "up_to_30": 3, "over_60": 3}, {"woy": "01", "up_to_10": 14, "up_to_30": 21, "over_60": 23}, {"woy": "02", "up_to_10": 15, "up_to_30": 17, "over_60": 21}, {"woy": "03", "up_to_10": 31, "up_to_30": 34, "over_60": 38}, {"woy": "04", "up_to_10": 19, "up_to_30": 23, "over_60": 28}, {"woy": "05", "up_to_10": 10, "up_to_30": 13, "over_60": 14}, {"woy": "06", "up_to_10": 18, "up_to_30": 18, "over_60": 26}, {"woy": "07", "up_to_10": 12, "up_to_30": 16, "over_60": 16}, {"woy": "08", "up_to_10": 8, "up_to_30": 10, "over_60": 12}, {"woy": "09", "up_to_10": 8, "up_to_30": 11, "over_60": 15}, {"woy": "10", "up_to_10": 15, "up_to_30": 19, "over_60": 19}, {"woy": "11", "up_to_10": 6, "up_to_30": 8, "over_60": 9}, {"woy": "12", "up_to_10": 6, "up_to_30": 6, "over_60": 7}, {"woy": "13", "up_to_10": 11, "up_to_30": 12, "over_60": 13}, {"woy": "14", "up_to_10": 12, "up_to_30": 13, "over_60": 14}, {"woy": "15", "up_to_10": 14, "up_to_30": 16, "over_60": 18}, {"woy": "16", "up_to_10": 12, "up_to_30": 14, "over_60": 16}, {"woy": "17", "up_to_10": 9, "up_to_30": 9, "over_60": 12}, {"woy": "18", "up_to_10": 17, "up_to_30": 17, "over_60": 18}, {"woy": "19", "up_to_10": 11, "up_to_30": 13, "over_60": 15}, {"woy": "20", "up_to_10": 7, "up_to_30": 12, "over_60": 17}, {"woy": "21", "up_to_10": 12, "up_to_30": 14, "over_60": 17}, {"woy": "22", "up_to_10": 14, "up_to_30": 16, "over_60": 16}, {"woy": "23", "up_to_10": 7, "up_to_30": 8, "over_60": 10}, {"woy": "24", "up_to_10": 14, "up_to_30": 14, "over_60": 14}, {"woy": "25", "up_to_10": 8, "up_to_30": 8, "over_60": 11}, {"woy": "26", "up_to_10": 18, "up_to_30": 18, "over_60": 20}, {"woy": "27", "up_to_10": 21, "up_to_30": 23, "over_60": 25}, {"woy": "28", "up_to_10": 11, "up_to_30": 12, "over_60": 13}, {"woy": "29", "up_to_10": 9, "up_to_30": 10, "over_60": 13}, {"woy": "30", "up_to_10": 16, "up_to_30": 17, "over_60": 19}, {"woy": "31", "up_to_10": 16, "up_to_30": 16, "over_60": 19}, {"woy": "32", "up_to_10": 24, "up_to_30": 27, "over_60": 33}, {"woy": "33", "up_to_10": 13, "up_to_30": 14, "over_60": 14}, {"woy": "34", "up_to_10": 18, "up_to_30": 19, "over_60": 20}, {"woy": "35", "up_to_10": 23, "up_to_30": 23, "over_60": 26}, {"woy": "36", "up_to_10": 27, "up_to_30": 28, "over_60": 28}, {"woy": "37", "up_to_10": 33, "up_to_30": 34, "over_60": 36}, {"woy": "38", "up_to_10": 26, "up_to_30": 26, "over_60": 27}, {"woy": "39", "up_to_10": 25, "up_to_30": 27, "over_60": 27}, {"woy": "40", "up_to_10": 25, "up_to_30": 25, "over_60": 27}, {"woy": "41", "up_to_10": 18, "up_to_30": 19, "over_60": 20}, {"woy": "42", "up_to_10": 26, "up_to_30": 29, "over_60": 32}, {"woy": "43", "up_to_10": 28, "up_to_30": 30, "over_60": 31}, {"woy": "44", "up_to_10": 23, "up_to_30": 26, "over_60": 30}, {"woy": "45", "up_to_10": 17, "up_to_30": 18, "over_60": 19}, {"woy": "46", "up_to_10": 24, "up_to_30": 24, "over_60": 27}, {"woy": "47", "up_to_10": 20, "up_to_30": 21, "over_60": 34}, {"woy": "48", "up_to_10": 24, "up_to_30": 25, "over_60": 26}, {"woy": "49", "up_to_10": 18, "up_to_30": 20, "over_60": 20}, {"woy": "50", "up_to_10": 22, "up_to_30": 25, "over_60": 26}, {"woy": "51", "up_to_10": 17, "up_to_30": 18, "over_60": 19}, {"woy": "52", "up_to_10": 14, "up_to_30": 14, "over_60": 14}]`);
const data_prs_days_open_2021 = JSON.parse(`[{"woy": "00", "up_to_10": 8, "up_to_30": 9, "over_60": 10}, {"woy": "01", "up_to_10": 12, "up_to_30": 14, "over_60": 15}, {"woy": "02", "up_to_10": 9, "up_to_30": 12, "over_60": 13}, {"woy": "03", "up_to_10": 11, "up_to_30": 13, "over_60": 15}, {"woy": "04", "up_to_10": 11, "up_to_30": 12, "over_60": 14}, {"woy": "05", "up_to_10": 10, "up_to_30": 13, "over_60": 13}, {"woy": "06", "up_to_10": 6, "up_to_30": 7, "over_60": 9}, {"woy": "07", "up_to_10": 7, "up_to_30": 7, "over_60": 9}, {"woy": "08", "up_to_10": 15, "up_to_30": 16, "over_60": 21}, {"woy": "09", "up_to_10": 17, "up_to_30": 22, "over_60": 27}, {"woy": "10", "up_to_10": 12, "up_to_30": 14, "over_60": 14}, {"woy": "11", "up_to_10": 6, "up_to_30": 8, "over_60": 9}, {"woy": "12", "up_to_10": 8, "up_to_30": 15, "over_60": 16}, {"woy": "13", "up_to_10": 12, "up_to_30": 13, "over_60": 15}, {"woy": "14", "up_to_10": 16, "up_to_30": 17, "over_60": 20}, {"woy": "15", "up_to_10": 8, "up_to_30": 10, "over_60": 16}, {"woy": "16", "up_to_10": 17, "up_to_30": 18, "over_60": 20}, {"woy": "17", "up_to_10": 12, "up_to_30": 13, "over_60": 16}, {"woy": "18", "up_to_10": 9, "up_to_30": 14, "over_60": 15}, {"woy": "19", "up_to_10": 13, "up_to_30": 15, "over_60": 19}, {"woy": "20", "up_to_10": 13, "up_to_30": 15, "over_60": 15}, {"woy": "21", "up_to_10": 6, "up_to_30": 7, "over_60": 8}, {"woy": "22", "up_to_10": 3, "up_to_30": 5, "over_60": 10}, {"woy": "23", "up_to_10": 7, "up_to_30": 7, "over_60": 8}, {"woy": "24", "up_to_10": 8, "up_to_30": 9, "over_60": 12}, {"woy": "25", "up_to_10": 13, "up_to_30": 15, "over_60": 20}, {"woy": "26", "up_to_10": 4, "up_to_30": 7, "over_60": 9}, {"woy": "27", "up_to_10": 8, "up_to_30": 9, "over_60": 11}, {"woy": "28", "up_to_10": 13, "up_to_30": 15, "over_60": 15}, {"woy": "29", "up_to_10": 8, "up_to_30": 8, "over_60": 9}, {"woy": "30", "up_to_10": 6, "up_to_30": 6, "over_60": 6}, {"woy": "31", "up_to_10": 2, "up_to_30": 2, "over_60": 3}, {"woy": "32", "up_to_10": 3, "up_to_30": 3, "over_60": 4}, {"woy": "33", "up_to_10": 4, "up_to_30": 6, "over_60": 13}, {"woy": "34", "up_to_10": 5, "up_to_30": 5, "over_60": 5}, {"woy": "35", "up_to_10": 10, "up_to_30": 10, "over_60": 10}, {"woy": "36", "up_to_10": 7, "up_to_30": 7, "over_60": 10}, {"woy": "37", "up_to_10": 5, "up_to_30": 7, "over_60": 9}, {"woy": "38", "up_to_10": 6, "up_to_30": 7, "over_60": 7}, {"woy": "39", "up_to_10": 7, "up_to_30": 7, "over_60": 9}, {"woy": "40", "up_to_10": 4, "up_to_30": 6, "over_60": 8}, {"woy": "41", "up_to_10": 5, "up_to_30": 5, "over_60": 5}, {"woy": "42", "up_to_10": 9, "up_to_30": 9, "over_60": 10}, {"woy": "43", "up_to_10": 15, "up_to_30": 16, "over_60": 17}, {"woy": "44", "up_to_10": 12, "up_to_30": 13, "over_60": 13}, {"woy": "45", "up_to_10": 9, "up_to_30": 10, "over_60": 13}, {"woy": "46", "up_to_10": 9, "up_to_30": 10, "over_60": 11}, {"woy": "47", "up_to_10": 20, "up_to_30": 22, "over_60": 22}, {"woy": "48", "up_to_10": 9, "up_to_30": 9, "over_60": 10}, {"woy": "49", "up_to_10": 10, "up_to_30": 11, "over_60": 14}, {"woy": "50", "up_to_10": 23, "up_to_30": 23, "over_60": 24}, {"woy": "51", "up_to_10": 11, "up_to_30": 11, "over_60": 12}, {"woy": "52", "up_to_10": 11, "up_to_30": 12, "over_60": 13}]`);
const data_prs_days_open_2020 = JSON.parse(`[{"woy": "01", "up_to_10": 2, "up_to_30": 2, "over_60": 2}, {"woy": "02", "up_to_10": 4, "up_to_30": 4, "over_60": 4}, {"woy": "03", "up_to_10": 3, "up_to_30": 3, "over_60": 3}, {"woy": "04", "up_to_10": 2, "up_to_30": 2, "over_60": 2}, {"woy": "08", "up_to_10": 1, "up_to_30": 1, "over_60": 1}, {"woy": "12", "up_to_10": 0, "up_to_30": 1, "over_60": 1}, {"woy": "14", "up_to_10": 1, "up_to_30": 1, "over_60": 1}, {"woy": "16", "up_to_10": 1, "up_to_30": 1, "over_60": 1}, {"woy": "17", "up_to_10": 1, "up_to_30": 1, "over_60": 1}, {"woy": "20", "up_to_10": 0, "up_to_30": 1, "over_60": 1}, {"woy": "22", "up_to_10": 0, "up_to_30": 0, "over_60": 1}, {"woy": "23", "up_to_10": 0, "up_to_30": 0, "over_60": 1}, {"woy": "24", "up_to_10": 0, "up_to_30": 1, "over_60": 1}, {"woy": "25", "up_to_10": 1, "up_to_30": 2, "over_60": 2}, {"woy": "27", "up_to_10": 1, "up_to_30": 1, "over_60": 2}, {"woy": "28", "up_to_10": 0, "up_to_30": 2, "over_60": 4}, {"woy": "29", "up_to_10": 2, "up_to_30": 2, "over_60": 2}, {"woy": "30", "up_to_10": 4, "up_to_30": 4, "over_60": 6}, {"woy": "31", "up_to_10": 6, "up_to_30": 6, "over_60": 7}, {"woy": "32", "up_to_10": 7, "up_to_30": 8, "over_60": 8}, {"woy": "33", "up_to_10": 6, "up_to_30": 7, "over_60": 9}, {"woy": "34", "up_to_10": 15, "up_to_30": 17, "over_60": 19}, {"woy": "35", "up_to_10": 7, "up_to_30": 9, "over_60": 11}, {"woy": "36", "up_to_10": 6, "up_to_30": 7, "over_60": 7}, {"woy": "37", "up_to_10": 8, "up_to_30": 10, "over_60": 10}, {"woy": "38", "up_to_10": 4, "up_to_30": 4, "over_60": 6}, {"woy": "39", "up_to_10": 5, "up_to_30": 6, "over_60": 6}, {"woy": "40", "up_to_10": 5, "up_to_30": 10, "over_60": 11}, {"woy": "41", "up_to_10": 13, "up_to_30": 14, "over_60": 16}, {"woy": "42", "up_to_10": 6, "up_to_30": 6, "over_60": 6}, {"woy": "43", "up_to_10": 2, "up_to_30": 2, "over_60": 6}, {"woy": "44", "up_to_10": 3, "up_to_30": 4, "over_60": 6}, {"woy": "45", "up_to_10": 8, "up_to_30": 10, "over_60": 12}, {"woy": "46", "up_to_10": 9, "up_to_30": 12, "over_60": 16}, {"woy": "47", "up_to_10": 18, "up_to_30": 18, "over_60": 19}, {"woy": "48", "up_to_10": 8, "up_to_30": 10, "over_60": 13}, {"woy": "49", "up_to_10": 9, "up_to_30": 10, "over_60": 10}, {"woy": "50", "up_to_10": 12, "up_to_30": 15, "over_60": 17}, {"woy": "51", "up_to_10": 10, "up_to_30": 13, "over_60": 13}, {"woy": "52", "up_to_10": 4, "up_to_30": 5, "over_60": 6}]`);
const data_contrast_2023 = JSON.parse(`[{"woy": "00", "num_prs": 4, "num_bugfixes": 0}, {"woy": "01", "num_prs": 23, "num_bugfixes": 7}, {"woy": "02", "num_prs": 18, "num_bugfixes": 4}, {"woy": "03", "num_prs": 15, "num_bugfixes": 0}, {"woy": "04", "num_prs": 21, "num_bugfixes": 2}, {"woy": "05", "num_prs": 16, "num_bugfixes": 7}, {"woy": "06", "num_prs": 23, "num_bugfixes": 4}, {"woy": "07", "num_prs": 26, "num_bugfixes": 4}, {"woy": "08", "num_prs": 15, "num_bugfixes": 5}, {"woy": "09", "num_prs": 10, "num_bugfixes": 1}, {"woy": "10", "num_prs": 19, "num_bugfixes": 5}, {"woy": "11", "num_prs": 15, "num_bugfixes": 3}, {"woy": "12", "num_prs": 24, "num_bugfixes": 7}, {"woy": "13", "num_prs": 14, "num_bugfixes": 6}, {"woy": "14", "num_prs": 4, "num_bugfixes": 2}]`);
const data_contrast_2022 = JSON.parse(`[{"woy": "00", "num_prs": 3, "num_bugfixes": 0}, {"woy": "01", "num_prs": 23, "num_bugfixes": 7}, {"woy": "02", "num_prs": 21, "num_bugfixes": 8}, {"woy": "03", "num_prs": 38, "num_bugfixes": 11}, {"woy": "04", "num_prs": 28, "num_bugfixes": 6}, {"woy": "05", "num_prs": 14, "num_bugfixes": 4}, {"woy": "06", "num_prs": 26, "num_bugfixes": 12}, {"woy": "07", "num_prs": 16, "num_bugfixes": 6}, {"woy": "08", "num_prs": 12, "num_bugfixes": 2}, {"woy": "09", "num_prs": 15, "num_bugfixes": 5}, {"woy": "10", "num_prs": 19, "num_bugfixes": 1}, {"woy": "11", "num_prs": 9, "num_bugfixes": 2}, {"woy": "12", "num_prs": 7, "num_bugfixes": 3}, {"woy": "13", "num_prs": 13, "num_bugfixes": 5}, {"woy": "14", "num_prs": 14, "num_bugfixes": 5}, {"woy": "15", "num_prs": 18, "num_bugfixes": 5}, {"woy": "16", "num_prs": 16, "num_bugfixes": 3}, {"woy": "17", "num_prs": 12, "num_bugfixes": 3}, {"woy": "18", "num_prs": 18, "num_bugfixes": 4}, {"woy": "19", "num_prs": 15, "num_bugfixes": 3}, {"woy": "20", "num_prs": 17, "num_bugfixes": 1}, {"woy": "21", "num_prs": 17, "num_bugfixes": 5}, {"woy": "22", "num_prs": 16, "num_bugfixes": 3}, {"woy": "23", "num_prs": 10, "num_bugfixes": 2}, {"woy": "24", "num_prs": 14, "num_bugfixes": 5}, {"woy": "25", "num_prs": 11, "num_bugfixes": 4}, {"woy": "26", "num_prs": 20, "num_bugfixes": 10}, {"woy": "27", "num_prs": 25, "num_bugfixes": 4}, {"woy": "28", "num_prs": 13, "num_bugfixes": 7}, {"woy": "29", "num_prs": 13, "num_bugfixes": 2}, {"woy": "30", "num_prs": 19, "num_bugfixes": 4}, {"woy": "31", "num_prs": 19, "num_bugfixes": 5}, {"woy": "32", "num_prs": 33, "num_bugfixes": 10}, {"woy": "33", "num_prs": 14, "num_bugfixes": 5}, {"woy": "34", "num_prs": 20, "num_bugfixes": 6}, {"woy": "35", "num_prs": 26, "num_bugfixes": 4}, {"woy": "36", "num_prs": 28, "num_bugfixes": 5}, {"woy": "37", "num_prs": 36, "num_bugfixes": 0}, {"woy": "38", "num_prs": 27, "num_bugfixes": 3}, {"woy": "39", "num_prs": 27, "num_bugfixes": 1}, {"woy": "40", "num_prs": 27, "num_bugfixes": 4}, {"woy": "41", "num_prs": 20, "num_bugfixes": 2}, {"woy": "42", "num_prs": 32, "num_bugfixes": 8}, {"woy": "43", "num_prs": 31, "num_bugfixes": 6}, {"woy": "44", "num_prs": 30, "num_bugfixes": 9}, {"woy": "45", "num_prs": 19, "num_bugfixes": 5}, {"woy": "46", "num_prs": 27, "num_bugfixes": 2}, {"woy": "47", "num_prs": 34, "num_bugfixes": 11}, {"woy": "48", "num_prs": 26, "num_bugfixes": 1}, {"woy": "49", "num_prs": 20, "num_bugfixes": 2}, {"woy": "50", "num_prs": 26, "num_bugfixes": 3}, {"woy": "51", "num_prs": 19, "num_bugfixes": 3}, {"woy": "52", "num_prs": 14, "num_bugfixes": 2}]`);
const data_contrast_2021 = JSON.parse(`[{"woy": "00", "num_prs": 10, "num_bugfixes": 5}, {"woy": "01", "num_prs": 15, "num_bugfixes": 7}, {"woy": "02", "num_prs": 13, "num_bugfixes": 3}, {"woy": "03", "num_prs": 15, "num_bugfixes": 4}, {"woy": "04", "num_prs": 14, "num_bugfixes": 4}, {"woy": "05", "num_prs": 13, "num_bugfixes": 4}, {"woy": "06", "num_prs": 9, "num_bugfixes": 5}, {"woy": "07", "num_prs": 9, "num_bugfixes": 1}, {"woy": "08", "num_prs": 21, "num_bugfixes": 8}, {"woy": "09", "num_prs": 27, "num_bugfixes": 8}, {"woy": "10", "num_prs": 14, "num_bugfixes": 1}, {"woy": "11", "num_prs": 9, "num_bugfixes": 2}, {"woy": "12", "num_prs": 16, "num_bugfixes": 4}, {"woy": "13", "num_prs": 15, "num_bugfixes": 6}, {"woy": "14", "num_prs": 20, "num_bugfixes": 5}, {"woy": "15", "num_prs": 16, "num_bugfixes": 6}, {"woy": "16", "num_prs": 20, "num_bugfixes": 6}, {"woy": "17", "num_prs": 16, "num_bugfixes": 4}, {"woy": "18", "num_prs": 15, "num_bugfixes": 6}, {"woy": "19", "num_prs": 19, "num_bugfixes": 8}, {"woy": "20", "num_prs": 15, "num_bugfixes": 6}, {"woy": "21", "num_prs": 8, "num_bugfixes": 2}, {"woy": "22", "num_prs": 10, "num_bugfixes": 1}, {"woy": "23", "num_prs": 8, "num_bugfixes": 3}, {"woy": "24", "num_prs": 12, "num_bugfixes": 3}, {"woy": "25", "num_prs": 20, "num_bugfixes": 8}, {"woy": "26", "num_prs": 9, "num_bugfixes": 2}, {"woy": "27", "num_prs": 11, "num_bugfixes": 4}, {"woy": "28", "num_prs": 15, "num_bugfixes": 6}, {"woy": "29", "num_prs": 9, "num_bugfixes": 4}, {"woy": "30", "num_prs": 6, "num_bugfixes": 1}, {"woy": "31", "num_prs": 3, "num_bugfixes": 0}, {"woy": "32", "num_prs": 4, "num_bugfixes": 0}, {"woy": "33", "num_prs": 13, "num_bugfixes": 7}, {"woy": "34", "num_prs": 5, "num_bugfixes": 2}, {"woy": "35", "num_prs": 10, "num_bugfixes": 3}, {"woy": "36", "num_prs": 10, "num_bugfixes": 2}, {"woy": "37", "num_prs": 9, "num_bugfixes": 4}, {"woy": "38", "num_prs": 7, "num_bugfixes": 2}, {"woy": "39", "num_prs": 9, "num_bugfixes": 3}, {"woy": "40", "num_prs": 8, "num_bugfixes": 2}, {"woy": "41", "num_prs": 5, "num_bugfixes": 3}, {"woy": "42", "num_prs": 10, "num_bugfixes": 5}, {"woy": "43", "num_prs": 17, "num_bugfixes": 2}, {"woy": "44", "num_prs": 13, "num_bugfixes": 3}, {"woy": "45", "num_prs": 13, "num_bugfixes": 4}, {"woy": "46", "num_prs": 11, "num_bugfixes": 3}, {"woy": "47", "num_prs": 22, "num_bugfixes": 8}, {"woy": "48", "num_prs": 10, "num_bugfixes": 2}, {"woy": "49", "num_prs": 14, "num_bugfixes": 7}, {"woy": "50", "num_prs": 24, "num_bugfixes": 2}, {"woy": "51", "num_prs": 12, "num_bugfixes": 3}, {"woy": "52", "num_prs": 13, "num_bugfixes": 2}]`);
