import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import data_contrast_2023 from '../2023_contrast_prs_bugfixes.json';
import data_contrast_2022 from '../2022_contrast_prs_bugfixes.json';
// import data_contrast_2021 from '../2021_contrast_prs_bugfixes.json';

(async function() {

  const opts = {
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
        },
        text: 'Change me ...',
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

  // clone config and change title for each graph
  var opts_2023 = structuredClone(opts);
  var opts_2022 = structuredClone(opts);
  var opts_2021 = structuredClone(opts);
  opts_2023.plugins.title.text='[2023] Contrast PRs and bugfixes'
  opts_2022.plugins.title.text='[2022] Contrast PRs and bugfixes'
  opts_2021.plugins.title.text='[2021] Contrast PRs and bugfixes'

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
  const ctx_contrast_2021 = document.getElementById('2021_contrast_prs_bugfixes');

  // PRs closed in 2023
  const contrast_2023 = new Chart(
    ctx_contrast_2023,
    {
      type: 'line',
      options: opts_2023,
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
  // contrast_2023.actions = actions

  // PRs closed in 2022
  const contrast_2022 = new Chart(
    ctx_contrast_2022,
    {
      type: 'line',
      options: opts_2022,
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

  // PRs closed in 2021
  // opts.plugins.title.text='[2021] Contrast PRs and bugfixes'
  // var contrast_2021 = new Chart(
  //   ctx_contrast_2021,
  //   {
  //     type: 'line',
  //     options: opts,
  //     data: {
  //       labels: data_contrast_2021.map(row => row.woy),
  //       datasets: [
  //         {
  //           label: 'Bugfixes',
  //           data: data_contrast_2021.map(row => row.num_bugfixes),
  //           backgroundColor: 'orange'
  //         },
  //         {
  //           label: 'PRs',
  //           data: data_contrast_2021.map(row => row.num_prs),
  //           backgroundColor: '#66b237'
  //         },
  //       ]
  //     },
  //   }
  // );

})();
