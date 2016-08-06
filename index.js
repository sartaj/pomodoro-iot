
// # Core

  // import { Observable } from 'rxjs-es/Observable';
  // import 'rxjs-es/add/operator/map';
  import * as Kefir from 'kefir';

  // import * as _ from 'lodash';
  import open from 'open';

  // # Server

  import express from 'express';
  import * as bodyParser from 'body-parser';


  import * as m from './mediator.js';
  import { start, update } from './moods';


  const server = express();
  server.use(express.static('client'));
  server.use(bodyParser.json());
  server.listen(8080);

  open('http://localhost:8080');

  // Observable.of(1, 2, 3).map(x => `${x}!!!`);

// Children

  start();

// Webook Natural Language Processor

  m['webhook:listened'] = Kefir.stream(emitter => {
    server.post('/robin', (req, res) => {
      emitter.emit(req);
      res.send(true);
    });
  })
  .filter(req => typeof req.body === 'object');

  m['webhook:processed-request'] = m['webhook:listened']
    .map(req => req.body);

  m['webhook:update-mood-requested'] = m['webhook:processed-request']
    .filter(json => json.action === 'set-mood')
    .map(json => json.value);

  m['webhook:update-mood-requested'].log('webhook:update-mood-requested');

  m['webhook:update-mood-requested'].onValue(requestedMood => {
    update(requestedMood);
  });
