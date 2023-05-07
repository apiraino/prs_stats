import Chart from 'chart.js/auto'
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

import data_contrast_2023 from '../2023_contrast_prs_bugfixes.json';
import data_contrast_2022 from '../test.json';
import data_contrast_2021 from '../2021_contrast_prs_bugfixes.json';
import { plugins, scales, elements } from './common';

(async function() {

  const ctx_contrast_2023 = document.getElementById('2023_contrast_prs_bugfixes');
  const ctx_contrast_2022 = document.getElementById('2022_contrast_prs_bugfixes');
  const ctx_contrast_2021 = document.getElementById('2021_contrast_prs_bugfixes');

  // PRs 2023: configure and create
  const data_2023 = {
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
    plugins: []
  };

  const contrast_2023 = new Chart(
    ctx_contrast_2023,
    config_2023
  );

  // PRs 2022: configure and create
  const data_2022 = {
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
    plugins: []
  };

  const contrast_2022 = new Chart(
    ctx_contrast_2022,
    config_2022
  );


  // PRs 2021: configure and create
  const data_2021 = {
    labels: data_contrast_2021.map(row => row.woy),
    datasets: [
      {
        label: 'Bugfixes',
        data: data_contrast_2021.map(row => row.num_bugfixes),
        backgroundColor: 'orange'
      },
      {
        label: 'PRs',
        data: data_contrast_2021.map(row => row.num_prs),
        backgroundColor: '#66b237'
      },
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
    plugins: []
  };

  const contrast_2021 = new Chart(
    ctx_contrast_2021,
    config_2021
  );

  const resetZoomBtn2023 = () => {
    contrast_2023.resetZoom()
  };

  const resetZoomBtn2022 = () => {
    contrast_2022.resetZoom()
  };

  const resetZoomBtn2021 = () => {
    contrast_2021.resetZoom()
  };

})();
