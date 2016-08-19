// Run server process
  // const path = require('path');
  //
  // const fork = require('child_process').fork;
  //
  // fork(path.join(__dirname, 'bootstrap-server.js'));

// Run babel compiler
require('babel-register');

const desktopPlatformDriver = require('./platforms/platform.desktop.js');

const ROOT_URL = __dirname;

desktopPlatformDriver({ ROOT_URL });
