import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import data_contrast_2023 from '../2023_contrast_prs_bugfixes.json';
import data_contrast_2022 from '../2022_contrast_prs_bugfixes.json';

(async function() {

  var opts = {
    plugins: {
      zoom: {
        pan: {
          enabled:true,
          mode: 'xy'
        },
        limits: {
          x: {min: 0, max: 'original'},
          y: {min: 0, max: 'original'},
        },
        zoom: {
          wheel: {
            enabled:true
          },
          pinch: {
            enabled:true
          },
          mode: 'xy'
        },
      },
      legend:{
        labels:{
          font: {
            size:24
          }
        },
      },
      title: {
        display:true,
        font: {
          size:24
        }
        // text: 'Change me ....',
      }
    },
    scales: {
      x: {
        title: {display:true, text:'Week of the year', font:{size:24}}
      },
      y: {
        title: {display:true, text:'Num PRs', font:{size:24}}
      },
    },
    elements: {
      line: {
        tension: 0.4,
        fill:true
      }
    }
  }

  // const actions = [
  //   {
  //     name: 'Reset zoom',
  //     handler: function(chart) {
  //       console.debug('no?');
  //       chart.resetZoom();
  //     }
  //   }
  // ];

  const ctx_contrast_2023 = document.getElementById('2023_contrast_prs_bugfixes');
  const ctx_contrast_2022 = document.getElementById('2022_contrast_prs_bugfixes');

  // PRs closed in 2023
  opts.plugins.title.text='[2023] Contrast PRs and bugfixes'
  var contrast_1 = new Chart(
    ctx_contrast_2023,
    {
      type: 'line',
      options: opts,
      data: {
        labels: data_contrast_2023.map(row => row.woy),
        datasets: [
          {
            label: 'Bugfixes',
            data: data_contrast_2023.map(row => row.num_bugfixes),
            backgroundColor: 'orange'
          },
          {
            label: 'PRs',
            data: data_contrast_2023.map(row => row.num_prs),
            backgroundColor: '#66b237'
          },
        ]
      },
    }
  );
  // XXX: maybe not needed
  // contrast_1.actions = actions

  // PRs closed in 2022
  opts.plugins.title.text='[2022] Contrast PRs and bugfixes'
  var contrast_2 = new Chart(
    ctx_contrast_2022,
    {
      type: 'line',
      options: opts,
      data: {
        labels: data_contrast_2022.map(row => row.woy),
        datasets: [
          {
            label: 'Bugfixes',
            data: data_contrast_2022.map(row => row.num_bugfixes),
            backgroundColor: 'orange'
          },
          {
            label: 'PRs',
            data: data_contrast_2022.map(row => row.num_prs),
            backgroundColor: '#66b237'

          },
        ]
      },
    }
  );
  // contrast_2.actions = actions

})();
