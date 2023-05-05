#!/usr/bin/env gnuplot

# set terminal pngcairo transparent enhanced font "arial,10" fontscale 1.0 size 600, 400
set terminal png size 1400, 800
set output 'work-time-prs-2022.png'

set title "[Year 2022] Work-time for a PR"
# set key center top

#
# Save each kernel density plot to a data block
# Then replot, mirrored, along the vertical axis
#

data_file='Q1234_2022.dat'

# TODO: what does this parameter really means?
kd_b = "10."

set table $kdensity1
plot "< grep \"W01 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity2
plot "< grep \"W02 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity3
plot "< grep \"W03 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity4
plot "< grep \"W04 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity5
plot "< grep \"W05 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity6
plot "< grep \"W06 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity7
plot "< grep \"W07 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity8
plot "< grep \"W08 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity9
plot "< grep \"W09 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity10
plot "< grep \"W10 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity11
plot "< grep \"W11 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity12
plot "< grep \"W12 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity13
plot "< grep \"W13 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity14
plot "< grep \"W14 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity15
plot "< grep \"W15 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity16
plot "< grep \"W16 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity17
plot "< grep \"W17 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity18
plot "< grep \"W18 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity19
plot "< grep \"W19 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity20
plot "< grep \"W20 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

####

set table $kdensity20
plot "< grep \"W20 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity21
plot "< grep \"W21 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity22
plot "< grep \"W22 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity23
plot "< grep \"W23 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity24
plot "< grep \"W24 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity25
plot "< grep \"W25 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity26
plot "< grep \"W26 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity27
plot "< grep \"W27 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity28
plot "< grep \"W28 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity29
plot "< grep \"W29 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

####

set table $kdensity30
plot "< grep \"W30 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity31
plot "< grep \"W31 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity32
plot "< grep \"W32 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity33
plot "< grep \"W33 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity34
plot "< grep \"W34 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity35
plot "< grep \"W35 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity36
plot "< grep \"W36 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity37
plot "< grep \"W37 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity38
plot "< grep \"W38 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity39
plot "< grep \"W39 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

#####

set table $kdensity40
plot "< grep \"W40 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity41
plot "< grep \"W41 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity42
plot "< grep \"W42 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity43
plot "< grep \"W43 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity44
plot "< grep \"W44 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity45
plot "< grep \"W45 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity46
plot "< grep \"W46 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity47
plot "< grep \"W47 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity48
plot "< grep \"W48 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity49
plot "< grep \"W49 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

######

set table $kdensity50
plot "< grep \"W50 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity51
plot "< grep \"W51 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

set table $kdensity52
plot "< grep \"W52 \" " . data_file using 2:(1) smooth kdensity bandwidth kd_b with filledcurves above y lt 9

####

unset table
unset key

set border 2
set margins 5, 5, 5, 5

set yrange [-2:90]

# set xtics format for each week
do for [i = 1 : 13] {
   n = sprintf("%02.0f", i)

   # total PRs for this week
   num_pr = system(sprintf("rg -c W%s %s", n, data_file))

   # example output: "W07\n(prs=123) 7"
   #set xtics add ("W" . n . "\n(prs=" . num_pr . ")" i)
}
#show xtics

#set output "|imv -"

plot $kdensity1 using (1 + $2/kd_b):1 t '' with filledcurve x=1 lt 1, '' using (1 - $2/kd_b):1 t '' with filledcurve x=1 lt 1, \
     $kdensity2 using (2 + $2/kd_b):1 t '' with filledcurve x=2 lt 2, '' using (2 - $2/kd_b):1 t '' with filledcurve x=2 lt 2, \
     $kdensity3 using (3 + $2/kd_b):1 t '' with filledcurve x=3 lt 3, '' using (3 - $2/kd_b):1 t '' with filledcurve x=3 lt 3, \
     $kdensity4 using (4 + $2/kd_b):1 t '' with filledcurve x=4 lt 4, '' using (4 - $2/kd_b):1 t '' with filledcurve x=4 lt 4, \
     $kdensity5 using (5 + $2/kd_b):1 t '' with filledcurve x=5 lt 5, '' using (5 - $2/kd_b):1 t '' with filledcurve x=5 lt 5, \
     $kdensity6 using (6 + $2/kd_b):1 t '' with filledcurve x=6 lt 6, '' using (6 - $2/kd_b):1 t '' with filledcurve x=6 lt 6, \
     $kdensity7 using (7 + $2/kd_b):1 t '' with filledcurve x=7 lt 7, '' using (7 - $2/kd_b):1 t '' with filledcurve x=7 lt 7, \
     $kdensity8 using (8 + $2/kd_b):1 t '' with filledcurve x=8 lt 8, '' using (8 - $2/kd_b):1 t '' with filledcurve x=8 lt 8, \
     $kdensity9 using (9 + $2/kd_b):1 t '' with filledcurve x=9 lt 9, '' using (9 - $2/kd_b):1 t '' with filledcurve x=9 lt 9, \
     $kdensity10 using (10 + $2/kd_b):1 t '' with filledcurve x=10 lt 10, '' using (10 - $2/kd_b):1 t '' with filledcurve x=10 lt 10, \
     $kdensity11 using (11 + $2/kd_b):1 t '' with filledcurve x=11 lt 11, '' using (11 - $2/kd_b):1 t '' with filledcurve x=11 lt 11, \
     $kdensity12 using (12 + $2/kd_b):1 t '' with filledcurve x=12 lt 12, '' using (12 - $2/kd_b):1 t '' with filledcurve x=12 lt 12, \
     $kdensity13 using (13 + $2/kd_b):1 t '' with filledcurve x=13 lt 13, '' using (13 - $2/kd_b):1 t '' with filledcurve x=13 lt 13, \
     $kdensity14 using (14 + $2/kd_b):1 t '' with filledcurve x=14 lt 14, '' using (14 - $2/kd_b):1 t '' with filledcurve x=14 lt 14, \
     $kdensity15 using (15 + $2/kd_b):1 t '' with filledcurve x=15 lt 15, '' using (15 - $2/kd_b):1 t '' with filledcurve x=15 lt 15, \
     $kdensity16 using (16 + $2/kd_b):1 t '' with filledcurve x=16 lt 16, '' using (16 - $2/kd_b):1 t '' with filledcurve x=16 lt 16, \
     $kdensity17 using (17 + $2/kd_b):1 t '' with filledcurve x=17 lt 17, '' using (17 - $2/kd_b):1 t '' with filledcurve x=17 lt 17, \
     $kdensity18 using (18 + $2/kd_b):1 t '' with filledcurve x=18 lt 18, '' using (18 - $2/kd_b):1 t '' with filledcurve x=18 lt 18, \
     $kdensity19 using (19 + $2/kd_b):1 t '' with filledcurve x=19 lt 19, '' using (19 - $2/kd_b):1 t '' with filledcurve x=19 lt 19, \
     $kdensity20 using (20 + $2/kd_b):1 t '' with filledcurve x=20 lt 20, '' using (20 - $2/kd_b):1 t '' with filledcurve x=20 lt 20, \
     $kdensity21 using (21 + $2/kd_b):1 t '' with filledcurve x=21 lt 21, '' using (21 - $2/kd_b):1 t '' with filledcurve x=21 lt 21, \
     $kdensity22 using (22 + $2/kd_b):1 t '' with filledcurve x=22 lt 22, '' using (22 - $2/kd_b):1 t '' with filledcurve x=22 lt 22, \
     $kdensity23 using (23 + $2/kd_b):1 t '' with filledcurve x=23 lt 23, '' using (23 - $2/kd_b):1 t '' with filledcurve x=23 lt 23, \
     $kdensity24 using (24 + $2/kd_b):1 t '' with filledcurve x=24 lt 24, '' using (24 - $2/kd_b):1 t '' with filledcurve x=24 lt 24, \
     $kdensity25 using (25 + $2/kd_b):1 t '' with filledcurve x=25 lt 25, '' using (25 - $2/kd_b):1 t '' with filledcurve x=25 lt 25, \
     $kdensity26 using (26 + $2/kd_b):1 t '' with filledcurve x=26 lt 26, '' using (26 - $2/kd_b):1 t '' with filledcurve x=26 lt 26, \
     $kdensity27 using (27 + $2/kd_b):1 t '' with filledcurve x=27 lt 27, '' using (27 - $2/kd_b):1 t '' with filledcurve x=27 lt 27, \
     $kdensity28 using (28 + $2/kd_b):1 t '' with filledcurve x=28 lt 28, '' using (28 - $2/kd_b):1 t '' with filledcurve x=28 lt 28, \
     $kdensity29 using (29 + $2/kd_b):1 t '' with filledcurve x=29 lt 29, '' using (29 - $2/kd_b):1 t '' with filledcurve x=29 lt 29, \
     $kdensity30 using (30 + $2/kd_b):1 t '' with filledcurve x=30 lt 30, '' using (30 - $2/kd_b):1 t '' with filledcurve x=30 lt 30, \
     $kdensity31 using (31 + $2/kd_b):1 t '' with filledcurve x=31 lt 31, '' using (31 - $2/kd_b):1 t '' with filledcurve x=31 lt 31, \
     $kdensity32 using (32 + $2/kd_b):1 t '' with filledcurve x=32 lt 32, '' using (32 - $2/kd_b):1 t '' with filledcurve x=32 lt 32, \
     $kdensity33 using (33 + $2/kd_b):1 t '' with filledcurve x=33 lt 33, '' using (33 - $2/kd_b):1 t '' with filledcurve x=33 lt 33, \
     $kdensity34 using (34 + $2/kd_b):1 t '' with filledcurve x=34 lt 34, '' using (34 - $2/kd_b):1 t '' with filledcurve x=34 lt 34, \
     $kdensity35 using (35 + $2/kd_b):1 t '' with filledcurve x=35 lt 35, '' using (35 - $2/kd_b):1 t '' with filledcurve x=35 lt 35, \
     $kdensity36 using (36 + $2/kd_b):1 t '' with filledcurve x=36 lt 36, '' using (36 - $2/kd_b):1 t '' with filledcurve x=36 lt 36, \
     $kdensity37 using (37 + $2/kd_b):1 t '' with filledcurve x=37 lt 37, '' using (37 - $2/kd_b):1 t '' with filledcurve x=37 lt 37, \
     $kdensity38 using (38 + $2/kd_b):1 t '' with filledcurve x=38 lt 38, '' using (38 - $2/kd_b):1 t '' with filledcurve x=38 lt 38, \
     $kdensity39 using (39 + $2/kd_b):1 t '' with filledcurve x=39 lt 39, '' using (39 - $2/kd_b):1 t '' with filledcurve x=39 lt 39, \
     $kdensity40 using (40 + $2/kd_b):1 t '' with filledcurve x=40 lt 40, '' using (40 - $2/kd_b):1 t '' with filledcurve x=40 lt 40, \
     $kdensity41 using (41 + $2/kd_b):1 t '' with filledcurve x=41 lt 41, '' using (41 - $2/kd_b):1 t '' with filledcurve x=41 lt 41, \
     $kdensity42 using (42 + $2/kd_b):1 t '' with filledcurve x=42 lt 42, '' using (42 - $2/kd_b):1 t '' with filledcurve x=42 lt 42, \
     $kdensity43 using (43 + $2/kd_b):1 t '' with filledcurve x=43 lt 43, '' using (43 - $2/kd_b):1 t '' with filledcurve x=43 lt 43, \
     $kdensity44 using (44 + $2/kd_b):1 t '' with filledcurve x=44 lt 44, '' using (44 - $2/kd_b):1 t '' with filledcurve x=44 lt 44, \
     $kdensity45 using (45 + $2/kd_b):1 t '' with filledcurve x=45 lt 45, '' using (45 - $2/kd_b):1 t '' with filledcurve x=45 lt 45, \
     $kdensity46 using (46 + $2/kd_b):1 t '' with filledcurve x=46 lt 46, '' using (46 - $2/kd_b):1 t '' with filledcurve x=46 lt 46, \
     $kdensity47 using (47 + $2/kd_b):1 t '' with filledcurve x=47 lt 47, '' using (47 - $2/kd_b):1 t '' with filledcurve x=47 lt 47, \
     $kdensity48 using (48 + $2/kd_b):1 t '' with filledcurve x=48 lt 48, '' using (48 - $2/kd_b):1 t '' with filledcurve x=48 lt 48, \
     $kdensity49 using (49 + $2/kd_b):1 t '' with filledcurve x=49 lt 49, '' using (49 - $2/kd_b):1 t '' with filledcurve x=49 lt 49, \
     $kdensity50 using (50 + $2/kd_b):1 t '' with filledcurve x=50 lt 50, '' using (50 - $2/kd_b):1 t '' with filledcurve x=50 lt 50, \
     $kdensity51 using (51 + $2/kd_b):1 t '' with filledcurve x=51 lt 51, '' using (51 - $2/kd_b):1 t '' with filledcurve x=51 lt 51, \
     $kdensity52 using (52 + $2/kd_b):1 t '' with filledcurve x=52 lt 52, '' using (52 - $2/kd_b):1 t '' with filledcurve x=52 lt 52, \
