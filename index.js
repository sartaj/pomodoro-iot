
// # Core

  var Kefir = require('kefir');
  var _ = require('lodash');

  var m = require('./mediator.js');

// # Server

  var express = require('express');
  var bodyParser = require('body-parser');

  var server = express();
  server.use(express.static('client'));
  server.use(bodyParser.json())
  server.listen(8080);

// Children

  var moods = require('./moods');
  moods.start();

// Webook Natural Language Processor

  m['webhook:listened'] = Kefir.stream(emitter => {
      server.post('/robin', (req, res) => {
        emitter.emit(req);
        res.send(true);
      });
    })
    .filter((req, res) => typeof req.body === 'object');

  m['webhook:processed-request'] = m['webhook:listened']
    .map(req => req.body);

  m['webhook:update-mood-requested'] = m['webhook:processed-request']
    .filter(json => json.action === 'set-mood')
    .map(json => json.value);

  m['webhook:update-mood-requested'].onValue(requestedMood => {
    moods.update(requestedMood);
  });
