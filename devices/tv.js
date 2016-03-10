var Kefir = require('kefir');

var SamsungRemote = require('samsung-remote');
var remote = new SamsungRemote({
    ip: '192.168.0.4' // required: IP address of your Samsung Smart TV
});

module.exports = remote;

module.exports.render = function (keys) {

  if(!keys) return;

  keys.forEach(key => {
    remote.send('KEY_' + key.toUpperCase(), () => {});
  });

};
