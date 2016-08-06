import lightsDriver from './lights.js';
import musicDriver from './music.js';
// import tvDriver from './tv.js';

function render(opts) {
  lightsDriver(opts.lights);
  musicDriver(opts.music);
  // tvDriver(opts.tv);
}

export default render;
