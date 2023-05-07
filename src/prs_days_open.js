import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import data_prs_days_open_2023 from '../2023.json';
import data_prs_days_open_2022 from '../2022.json';
import data_prs_days_open_2021 from '../2021.json';
import data_prs_days_open_2020 from '../2020.json';

(async function() {

  const opts = {
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
        text: 'Change me ...'
      }
    }
  }

  // clone config and change title for each graph
  var opts_2023 = structuredClone(opts);
  var opts_2022 = structuredClone(opts);
  var opts_2021 = structuredClone(opts);
  var opts_2020 = structuredClone(opts);
  opts_2023.plugins.title.text='[2023] How long are PRs sitting open before being closed?'
  opts_2022.plugins.title.text='[2022] How long are PRs sitting open before being closed?'
  opts_2021.plugins.title.text='[2021] How long are PRs sitting open before being closed?'
  opts_2020.plugins.title.text='[2020] How long are PRs sitting open before being closed?'

  const ctx_prs_days_open_2023 = document.getElementById('prs_days_open_2023');
  const ctx_prs_days_open_2022 = document.getElementById('prs_days_open_2022');
  const ctx_prs_days_open_2021 = document.getElementById('prs_days_open_2021');
  const ctx_prs_days_open_2020 = document.getElementById('prs_days_open_2020');

  // PRs closed in 2023
  const chart_2023 = new Chart(
    ctx_prs_days_open_2023,
    {
      type: 'line',
      options: opts_2023,
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
            label: 'More than 60 days',
            data: data_prs_days_open_2023.map(row => row.over_60),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );

  // PRs closed in 2022
  const chart_2022 = new Chart(
    ctx_prs_days_open_2022,
    {
      type: 'line',
      options: opts_2022,
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
            label: 'More than 60 days',
            data: data_prs_days_open_2022.map(row => row.over_60),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );

  // PRs closed in 2021
  const chart_2021 = new Chart(
    ctx_prs_days_open_2021,
    {
      type: 'line',
      options: opts_2021,
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
            label: 'More than 60 days',
            data: data_prs_days_open_2021.map(row => row.over_60),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );

  // PRs closed in 2020
  const chart_2020 = new Chart(
    ctx_prs_days_open_2020,
    {
      type: 'line',
      options: opts_2020,
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
            label: 'More than 60 days',
            data: data_prs_days_open_2020.map(row => row.over_60),
            backgroundColor: 'red'
          }
        ]
      },
    }
  );

  resetZoomBtn2023 = () => {
    chart_2023.resetZoom()
  };

  resetZoomBtn2022 = () => {
    chart_2022.resetZoom()
  };

  resetZoomBtn2021 = () => {
    chart_2021.resetZoom()
  };

  resetZoomBtn2020 = () => {
    chart_2020.resetZoom()
  };

})();
