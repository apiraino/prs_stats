#!/usr/bin/env gnuplot

set terminal png size 1400, 600
set output 'test.png'
#set key center top

array pr_opened_days[3] = ["up_to_10_days", "up_to_20_days", "over_30_days"]

# Generate a reusable set of data points from a mixture of Gaussians
nsamp = 52 # 52 weeks in a year
num_pr_per_week = 223

set print $viol1

do for [i=1:nsamp] {
    woy = sprintf("W%d", i)
    do for [j=1:num_pr_per_week] {
       y = floor((i%4 == 0) ? 30. +  7.*invnorm(rand(0)) \
         : (i%4 == 1) ? 40. +  10.*invnorm(rand(0)) \
         :              12. +  4.*invnorm(rand(0)))
       # pr_open_for = pr_opened_days[j]
       print sprintf("%s %g", woy, y)
    }
}



set print $viol2
do for [i=1:nsamp] {
    woy = sprintf("W%d", i)
    do for [j=1:num_pr_per_week] {
       y = floor((i%4 == 0) ? 30. +  7.*invnorm(rand(0)) \
         : (i%4 == 1) ? 40. +  10.*invnorm(rand(0)) \
         :              12. +  4.*invnorm(rand(0)))
       # pr_open_for = pr_opened_days[j]
       print sprintf("%s %g", woy, y)
    }
}
unset print

#print $viol1
#exit status 0

#do for [i = 00 : 10 : 2] {
#    print i
#}
#exit 0

data_file='test.dat'

# Tip: will print a table of "X Y {Z} <flag>"
# example generated data row: "271.338  0.286452  0.286452  i"

set table $kdensity1
# plot 'chicks.csv' using 2:(1) smooth kdensity bandwidth 5. with filledcurves above y lt 9 title 'B'
# plot $viol1 using 2:(1) smooth kdensity bandwidth 3. with filledcurves above y lt 9 title 'B'
# plot 'test.csv' using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9 title 'B'
plot "< grep \"W1 \" " .  data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9 title 'A'

set table $kdensity2
#plot $viol2 using 2:(1) smooth kdensity bandwidth 3. with filledcurves above y lt 10 title 'A'
plot "< grep \"W2 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9 title 'B'

set table $kdensity3
plot "< grep \"W3 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9 title 'C'

# set table $kdensity4
# plot "< grep \"W4 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9 title 'D'
# set table $kdensity5
# plot "< grep \"W5 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9 title 'E'
# set table $kdensity6
# plot "< grep \"W6 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9 title 'F'
# set table $kdensity7
# plot "< grep \"W7 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9
# set table $kdensity8
# plot "< grep \"W8 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9
# set table $kdensity9
# plot "< grep \"W9 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9
# set table $kdensity10
# plot "< grep \"W10 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9
# set table $kdensity11
# plot "< grep \"W11 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9
# set table $kdensity12
# plot "< grep \"W12 \" " . data_file using 2:(1) smooth kdensity bandwidth 2. with filledcurves above y lt 9

unset table
#unset key

print $kdensity1
print $kdensity2
# exit status 0

set border 2
unset margins
# unset xtics
# unset x2tics
# set ytics nomirror rangelimited

# set xrange [-1:4]

# set xtics format for each week
# set xtics ( \
#     "W1" 1, \
#     "W2" 2, \
#     "W3" 3, \
# )

# Tip: this plots vertically a data block and then the same data block, mirrored
# Tip: $2 == column(2)
# Tip: "(1 + $2/20.):1" will plot on the x-axis the "positive side" of the 0 the second column of the data divided by "20." (?). On the y-axis will plot a "1".
# Tip: "using 2:3" is interpreted as in "using x:y" therefore: x-axis=column 2 and y-axis=column 3 from the data
# Tip: "using 2:(1)" is x-axis=column 2 and y-axis=column 1 (???)
# Tip: "using 1" is interpreted as "using 0:y" -> plot on the y-axis
# Tip: using ::4 is interpreted as using 1:2:4
# Tip: the '' indicates an empty title
# plot $kdensity2 using (1 + $2/20.):1 with filledcurve x=1 lt 10, '' using (1 - $2/20.):1 with filledcurve x=1 lt 10, \
#     $kdensity1 using (3 + $2/20.):1 with filledcurve x=3 lt 9, '' using (3 - $2/20.):1 with filledcurve x=3 lt 9

#set output "|imv -"

plot $kdensity1 using (1 + $2/20.):1 t '' with filledcurve x=1 lt 1, \
     '' using (1 - $2/20.):1 t '' with filledcurve x=1 lt 1, \
     $kdensity2 using (2 + $2/20.):1 t '' with filledcurve x=2 lt 2, \
     '' using (2 - $2/20.):1 t '' with filledcurve x=2 lt 2, \
     $kdensity3 using (3 + $2/20.):1 t '' with filledcurve x=3 lt 3, \
     '' using (3 - $2/20.):1 t '' with filledcurve x=3 lt 3, \
     # $kdensity4 using (4 + $2/20.):1 t '' with filledcurve x=4 lt 4, \
     # '' using (4 - $2/20.):1 t '' with filledcurve x=4 lt 4, \
     # $kdensity5 using (5 + $2/20.):1 t '' with filledcurve x=5 lt 5, \
     # '' using (5 - $2/20.):1 t '' with filledcurve x=5 lt 5, \
     # $kdensity6 using (6 + $2/20.):1 t '' with filledcurve x=6 lt 6, \
     # '' using (6 - $2/20.):1 t '' with filledcurve x=6 lt 6, \
     # $kdensity7 using (7 + $2/20.):1 t '' with filledcurve x=7 lt 7, \
     # '' using (7 - $2/20.):1 t '' with filledcurve x=7 lt 7, \
     # $kdensity8 using (8 + $2/20.):1 t '' with filledcurve x=8 lt 8, \
     # '' using (8 - $2/20.):1 t '' with filledcurve x=8 lt 8, \
     # $kdensity9 using (9 + $2/20.):1 t '' with filledcurve x=9 lt 9, \
     # '' using (9 - $2/20.):1 t '' with filledcurve x=9 lt 9, \
     # $kdensity10 using (10 + $2/20.):1 t '' with filledcurve x=10 lt 10, \
     # '' using (10 - $2/20.):1 t '' with filledcurve x=10 lt 10, \
     # $kdensity11 using (11 + $2/20.):1 t '' with filledcurve x=11 lt 11, \
     # '' using (11 - $2/20.):1 t '' with filledcurve x=11 lt 11, \
     # $kdensity12 using (12 + $2/20.):1 t '' with filledcurve x=12 lt 12, \
     # '' using (12 - $2/20.):1 t '' with filledcurve x=12 lt 12. \
