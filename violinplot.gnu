#!/usr/bin/env gnuplot

# set terminal pngcairo  transparent enhanced font "arial,10" fontscale 1.0 size 600, 400
set terminal png size 1400, 600
set output 'violinplot.png'

# Generate a reusable set of data points from a mixture of Gaussians
nsamp = 3000
set print $viol1
do for [i=1:nsamp] {
    y = (i%4 == 0) ? 300. +  70.*invnorm(rand(0)) \
      : (i%4 == 1) ? 400. +  10.*invnorm(rand(0)) \
      :              120. +  40.*invnorm(rand(0))
    print sprintf(" 35.0 %8.5g", y)
}
unset print

set print $viol2
do for [i=1:nsamp] {
    y = (i%4 == 0) ? 300. +  70.*invnorm(rand(0)) \
      : (i%4 == 1) ? 250. +  10.*invnorm(rand(0)) \
      :               70. +  20.*invnorm(rand(0))
    print sprintf(" 34.0 %8.5g", y)
}
unset print
#

#
# Save each kernel density plot to a data block 
# Then replot, mirrored, along the vertical axis
#

set title "kdensity mirrored sideways to give a violin plot"

set table $kdensity1
plot $viol1 using 2:(1) smooth kdensity bandwidth 10. with filledcurves above y lt 9 title 'B'
set table $kdensity2
plot $viol2 using 2:(1) smooth kdensity bandwidth 10. with filledcurves above y lt 10 title 'A'
unset table
unset key

set border 2
set xtics ("A" 34, "B" 35)
set xtics nomirror scale 0
set ytics nomirror rangelimited

unset margins
unset xtics
set ytics nomirror rangelimited

#set xtics ("ONE" 34, "TWO" 2)
set xrange [-1:10]

plot $kdensity2 using (1 + $2/20.):1 with filledcurve x=1 lt 10, '' using (1 - $2/20.):1 with filledcurve x=1 lt 10, \
     $kdensity1 using (3 + $2/20.):1 with filledcurve x=3 lt 9, '' using (3 - $2/20.):1 with filledcurve x=3 lt 9
