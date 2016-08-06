import * as Kefir from 'kefir';
import fs from 'fs';

import mediator from '../mediator.js';
import deviceDriver from '../devices/index.js';

let availableMoods = {};

function start() {
  mediator['mood:init'] = Kefir.fromNodeCallback(callback => {
    fs.readFile('./moods/moodMap.json', 'utf8', callback);
  }).map((data) => JSON.parse(data));

  mediator['mood:init'].onValue(moods => {
    availableMoods = moods;
  });
}

function renderMood(requestedMood) {
  const opts = availableMoods[requestedMood];
  deviceDriver(opts);
}

export {
  start,
  renderMood as update,
};
