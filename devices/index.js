module.exports.render = function(opts) {
  require('./lights.js').render(opts.lights);
  require('./music.js').render(opts.music);
  require('./tv.js').render(opts.tv);
};
