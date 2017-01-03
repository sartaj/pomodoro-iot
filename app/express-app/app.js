import express from 'express';
import { send } from './tv.js';

const server = express();

function init() {
  // const express = require('express'),
  //       path = require('path'),
  //       //favicon = require('serve-favicon'),
  //       logger = require('morgan'),
  //       cookieParser = require('cookie-parser'),
  //       bodyParser = require('body-parser'),
  //       routes = require('./routes/index'),
  //       users = require('./routes/users'),
  //       app = express();
  //
  // //view engine setup
  // app.set('views', path.join(__dirname, 'views'));
  // app.set('view engine', 'hbs');
  //
  // //uncomment after placing your favicon in /public
  // //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
  // app.use(logger('dev'));
  // app.use(bodyParser.json());
  // app.use(bodyParser.urlencoded({ extended: false }));
  // app.use(cookieParser());
  // app.use(express.static(path.join(__dirname, 'public')));
  //
  // app.use('/', routes);
  // app.use('/users', users);
  //
  // //catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   const err = new Error('Not Found');
  //
  //   err.status = 404;
  //   next(err);
  // });
  //
  // //error handlers
  //
  // //development error handler
  // //will print stacktrace
  // if (app.get('env') === 'development') {
  //   app.use(function(err, req, res) {
  //     res.status(err.status || 500);
  //     res.render('error', {
  //       message: err.message,
  //       error: err
  //     });
  //   });
  // }
  //
  // //production error handler
  // //no stacktraces leaked to user
  // app.use(function(err, req, res) {
  //   res.status(err.status || 500);
  //   res.render('error', {
  //     message: err.message,
  //     error: {}
  //   });
  // });


  server.get('/', function (req, res) {
    res.send(`<a href="/tv">TV Source</a>'`)
  });
  server.get('/tv', (req, res) => {
    send('source');
  });

  server.listen(3000, function () {
    console.log('Example app listening on port 3000!')
  })
}

export default init;
