var Kefir = require('kefir');
var _ = require('lodash');
var e = require('../mediator.js');

var fs = require('fs');
var availableMoods = {};

module.exports.start = function() {

  e['mood:init'] = Kefir.fromNodeCallback(callback => {
    fs.readFile('./moods/moodMap.json', 'utf8', callback)
  }).map((data) => JSON.parse(data));

  e['mood:init'].onValue(moods => {

    availableMoods = moods;

  });

};

module.exports.update = renderMood;

var devices = require('../devices/');
function renderMood(requestedMood) {
  var opts = availableMoods[requestedMood];
  devices.render(opts)
}
