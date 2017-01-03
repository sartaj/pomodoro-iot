import * as Kefir from 'kefir';

// # Server

import express from 'express';
import * as bodyParser from 'body-parser';


import * as m from './mediator.js';
import { update } from '../../model';


const server = express();
server.use(express.static('client'));
server.use(bodyParser.json());
server.listen(8080);


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
