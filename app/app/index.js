import Cycle from 'cycle-react';

import { runDriverSources, runDriverSinks } from './utils/driver-utils.js';

import model from './model.js';
import intent from './intent.js';
import view from './view.jsx';

import timeDriver from './drivers/TimeDriver/';
import storageDriver from './drivers/LocalStorageDriver/';
// import routerDriver from './drivers/RouterDriver/';

// import devices from './devices/index.js';
import lightsDriver from './devices/HueDriver/lights.js';
import musicDriver from './devices/SpotifyDriver/music.js';

const App = Cycle.component('App', (interactions, props) => {
  // Sources
  const drivers = {
    interactions,

    timer: timeDriver,
    storage: storageDriver,

    // music: musicDriver,
    // lights: lightsDriver,
  };

  const sources = runDriverSources(drivers, props);

  const model$ = model(intent(sources));
  // Sinks
  // runDriverSinks(drivers, model$);
  return view(interactions, model$);

  // return runDriverSink(model(intent(runDriverSources(drivers, props))));
});

export default App;
