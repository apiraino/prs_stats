const zoomOptions = {
  pan: {
    enabled:true,
    mode: 'xy'
  },
  limits: {
    x: {min: 0, max: 'original'},
    y: {min: 0, max: 'original'},
  },
  // zoom is enabled by event onClick
  zoom: {
    wheel: {
      enabled: false
    },
    pinch: {
      enabled: false
    },
    mode: 'xy'
  },
};
const zoomStatus = () => 'Zoom: ' + (zoomOptions.zoom.wheel.enabled ? 'enabled' : 'disabled');

const scales = {
  x: {
    title: { display:true, text:'Week of the year', font:{ size:24 } },
    stacked: true
  },
  y: {
    title: { display:true, text:'Num PRs', font:{ size:24 } },
    stacked: true
  },
};

const plugins = {
  zoom: zoomOptions,
  legend: {
    labels: {
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
};

const elements = {
  line: {
    tension: 0.4,
    fill:true
  }
};
