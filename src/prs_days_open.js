import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import data_prs_days_open_2023 from '../2023.json';
import data_prs_days_open_2022 from '../2022.json';
import data_prs_days_open_2021 from '../2021.json';
import data_prs_days_open_2020 from '../2020.json';
import { plugins, scales, elements } from './common';

(async function() {

  const ctx_prs_days_open_2023 = document.getElementById('prs_days_open_2023');
  const ctx_prs_days_open_2022 = document.getElementById('prs_days_open_2022');
  const ctx_prs_days_open_2021 = document.getElementById('prs_days_open_2021');
  const ctx_prs_days_open_2020 = document.getElementById('prs_days_open_2020');

  // PRs 2023: configure and create
  const data_2023 = {
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
  };

  // clone plugin config and customize title
  const plugins_2023 = structuredClone(plugins);
  plugins_2023.title.text='[2023] Contrast PRs and bugfixes'
  const config_2023 = {
    type: 'line',
    data: data_2023,
    options: {
      scales: scales,
      plugins: plugins_2023,
      elements: elements,
      onClick(e) {
        const chart = e.chart;
        console.debug('Clicked: ' + chart.options.plugins.title.text)
        chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
        chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
        chart.update();
      },
    },
  };

  const chart_2023 = new Chart(
    ctx_prs_days_open_2023,
    config_2023
  );

  // PRs 2022: configure and create
  const data_2022 = {
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
  };

  // clone plugin config and customize title
  const plugins_2022 = structuredClone(plugins);
  plugins_2022.title.text='[2022] Contrast PRs and bugfixes'
  const config_2022 = {
    type: 'line',
    data: data_2022,
    options: {
      scales: scales,
      plugins: plugins_2022,
      elements: elements,
      onClick(e) {
        const chart = e.chart;
        console.debug('Clicked: ' + chart.options.plugins.title.text)
        chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
        chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
        chart.update();
      },
    },
  };

  const chart_2022 = new Chart(
    ctx_prs_days_open_2022,
    config_2022
  );

  // PRs 2021: configure and create
  const data_2021 = {
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
  };

  // clone plugin config and customize title
  const plugins_2021 = structuredClone(plugins);
  plugins_2021.title.text='[2021] Contrast PRs and bugfixes'
  const config_2021 = {
    type: 'line',
    data: data_2021,
    options: {
      scales: scales,
      plugins: plugins_2021,
      elements: elements,
      onClick(e) {
        const chart = e.chart;
        console.debug('Clicked: ' + chart.options.plugins.title.text)
        chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
        chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
        chart.update();
      },
    },
  };

  const chart_2021 = new Chart(
    ctx_prs_days_open_2021,
    config_2021
  );

  // PRs 2020: configure and create
  const data_2020 = {
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
  };

  // clone plugin config and customize title
  const plugins_2020 = structuredClone(plugins);
  plugins_2020.title.text='[2020] Contrast PRs and bugfixes'
  const config_2020 = {
    type: 'line',
    data: data_2020,
    options: {
      scales: scales,
      plugins: plugins_2020,
      elements: elements,
      onClick(e) {
        const chart = e.chart;
        console.debug('Clicked: ' + chart.options.plugins.title.text)
        chart.options.plugins.zoom.zoom.wheel.enabled = !chart.options.plugins.zoom.zoom.wheel.enabled;
        chart.options.plugins.zoom.zoom.pinch.enabled = !chart.options.plugins.zoom.zoom.pinch.enabled;
        chart.update();
      },
    },
  };

  const chart_2020 = new Chart(
    ctx_prs_days_open_2020,
    config_2020
  );

  const resetZoomBtn2023 = () => {
    chart_2023.resetZoom()
  };

  const resetZoomBtn2022 = () => {
    chart_2022.resetZoom()
  };

  const resetZoomBtn2021 = () => {
    chart_2021.resetZoom()
  };

  const resetZoomBtn2020 = () => {
    chart_2020.resetZoom()
  };

})();
