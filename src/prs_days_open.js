import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import data_prs_days_open_2023 from '../2023.json';
import data_prs_days_open_2022 from '../2022.json';
import data_prs_days_open_2021 from '../2021.json';
import data_prs_days_open_2020 from '../2020.json';

(async function() {

  var opts = {
    scales: {
      x: {
        //stacked:true,
        title: {display:true, text:'Week of the year', font:{size:24}}
      },
      y: {
        //stacked:true,
        title: {display:true, text:'Num PRs', font:{size:24}}
      },
    },
    elements: {
      line: {
        tension: 0.4,
        fill: true
      }
    },
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
        // dynamically enable the zoom
        // https://github.com/chartjs/chartjs-plugin-zoom/blob/master/docs/samples/wheel/click-zoom.md
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
        text: 'Default title'
      }
    }
  }

  // const actions = [
  //   {
  //     name: 'Reset zoom',
  //     handler: function(chart) {
  //       chart.resetZoom();
  //     }
  //   }
  // ];

  const ctx_prs_days_open_2023 = document.getElementById('prs_days_open_2023');
  const ctx_prs_days_open_2022 = document.getElementById('prs_days_open_2022');
  const ctx_prs_days_open_2021 = document.getElementById('prs_days_open_2021');
  const ctx_prs_days_open_2020 = document.getElementById('prs_days_open_2020');

  // TODO
  // const years = [2020,2021,2022,2023]
  // years.forEach(year => {
  //   console.debug('Create all charts here...')
  // })

  // PRs closed in 2023
  opts.plugins.title.text='[2023] How long are PRs sitting open before being closed?'
  var chart_1 = new Chart(
    ctx_prs_days_open_2023,
    {
      type: 'line',
      options: opts,
      data: {
        labels: data_prs_days_open_2023.map(row => row.woy),
        datasets: [
          {
            label: 'Up to 10 days',
            data: data_prs_days_open_2023.map(row => row.up_to_10),
            backgroundColor: '#66b237'
          },
          {
            label: 'Up to 30 days',
            data: data_prs_days_open_2023.map(row => row.up_to_30),
            backgroundColor: 'orange'
          },
          {
            label: 'More than 30 days',
            data: data_prs_days_open_2023.map(row => row.over_30),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );
  // chart_1.actions = actions

  // PRs closed in 2022
  opts.plugins.title.text='[2022] How long are PRs sitting open before being closed?'
  var chart_2 = new Chart(
    ctx_prs_days_open_2022,
    {
      type: 'line',
      options: opts,
      data: {
        labels: data_prs_days_open_2022.map(row => row.woy),
        datasets: [
          {
            label: 'Up to 10 days',
            data: data_prs_days_open_2022.map(row => row.up_to_10),
            backgroundColor: '#66b237'
          },
          {
            label: 'Up to 30 days',
            data: data_prs_days_open_2022.map(row => row.up_to_30),
            backgroundColor: 'orange'
          },
          {
            label: 'More than 30 days',
            data: data_prs_days_open_2022.map(row => row.over_30),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );
  // chart_2.actions = actions


  // PRs closed in 2021
  opts.plugins.title.text='[2021] How long are PRs sitting open before being closed?'
  var chart_3 = new Chart(
    ctx_prs_days_open_2021,
    {
      type: 'line',
      options: opts,
      data: {
        labels: data_prs_days_open_2021.map(row => row.woy),
        datasets: [
          {
            label: 'Up to 10 days',
            data: data_prs_days_open_2021.map(row => row.up_to_10),
            backgroundColor: '#66b237'
          },
          {
            label: 'Up to 30 days',
            data: data_prs_days_open_2021.map(row => row.up_to_30),
            backgroundColor: 'orange'
          },
          {
            label: 'More than 30 days',
            data: data_prs_days_open_2021.map(row => row.over_30),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );
  // chart_3.actions = actions

  // PRs closed in 2020
  opts.plugins.title.text='[2020] How long are PRs sitting open before being closed?'
  var chart_4 = new Chart(
    ctx_prs_days_open_2020,
    {
      type: 'line',
      options: opts,
      data: {
        labels: data_prs_days_open_2020.map(row => row.woy),
        datasets: [
          {
            label: 'Up to 10 days',
            data: data_prs_days_open_2020.map(row => row.up_to_10),
            backgroundColor: '#66b237'
          },
          {
            label: 'Up to 30 days',
            data: data_prs_days_open_2020.map(row => row.up_to_30),
            backgroundColor: 'orange'
          },
          {
            label: 'More than 30 days',
            data: data_prs_days_open_2020.map(row => row.over_30),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );
  // chart_4.actions = actions

})();
