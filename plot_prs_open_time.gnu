#!/usr/bin/env gnuplot

# Documentation
# plot 'file' using {<entry> {:<entry> {:<entry> ...}}} {'format'}
# "using": http://www.gnuplot.info/docs/loc8764.html
# "set style": http://www.gnuplot.info/docs_4.2/node62.html

# Resources
# https://alvinalexander.com/technology/gnuplot-charts-graphs-examples/
# https://gnuplot.sourceforge.net/demo/
# https://orgmode.org/worg/org-contrib/babel/languages/ob-doc-gnuplot.html

set terminal png size 1400, 600
set output "2022.png"
set key center top
set style fill solid
# set xdata
# set timefmt "%Y-%m-%d"
# set format x "%d"

# Tip: The set x2tics command controls major (labeled) tics on the x2 (top) axis. See set xtics for details.
# set x2tics 5

# Tip: Fine control of the major (labeled) tics on the x axis
# set xtics 5

# set ytics 10
# set y2tics 30 border
set xlabel "2022: How long are PRs sitting open before being closed?"

# Tip: create a style for lines called "1" with color as RGB triplet and point type 6 (a circle with a dot in it)
set style line 1 lt rgb "#5e9f16" lw 3 pt 6
set style line 2 lt rgb "orange" lw 3 pt 6
set style line 3 lt rgb "red" lw 3 pt 6
# set style line 1 linetype 1 pointtype 0 linewidth 3 linecolor rgb "magenta"
# set style line 3 linetype 3 pointtype 0 linewidth 3 linecolor 8
# set style line 4 linetype 4 pointtype 0 linewidth 3 linecolor 9
# set style line 1 linetype 2 pointtype 0 linewidth 15 linecolor rgb "magenta"

# stacked lines
# plot ["20110101":"20110131"][:] \
#      '1.dat' using 1:5 t "Up to 10 days" w lines linestyle 4, \
#      '1.dat' using 1:4 t "up to 20 days" w lines linestyle 3, \
#      '1.dat' using 1:3 t "Up to 30 days" w lines linestyle 2, \
#      '1.dat' using 1:2 t "Over 30 days" w lines linestyle 1

# stacked areas
# plot ["20110101":"20110131"][:] \
#      '1.dat' using 1:4 t "Up to 10 days" w filledcurves x1 linestyle 3,\
#      '1.dat' using 1:3 t "Up to 30 days" w filledcurves x1 linestyle 2, \
#      '1.dat' using 1:2 t "Over 30 days" w filledcurves x1 linestyle 1

# plot ["02":"10"][:]
#      '2.dat' using 1:4 t "Up to 10 days" w lines linestyle 4, \
#      '2.dat' using 1:3 t "Up to 30 days" w filledcurves x1 linestyle 2, \
#      '2.dat' using 1:2 t "Over 30 days" w filledcurves x1 linestyle 1

# Plot from the "background" to the "foreground" layer
plot \
     '2022.dat' using 4 t "Over 30 days" with filledcurves x1 linestyle 3, \
     '2022.dat' using 3 t "Up to 30 days" with filledcurves x1 linestyle 2,\
     '2022.dat' using 2 t "Up to 10 days" with filledcurves x1 linestyle 1, \
     '2022.dat' using 5 t "Regressions" with filledcurves x1 linestyle 6, \
