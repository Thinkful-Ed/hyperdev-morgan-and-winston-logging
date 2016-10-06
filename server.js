'use strict';

const express = require('express');
const morgan = require('morgan');

const {logger} = require('./utilities/logger');
const {foo, bar} = require('./middlewares');

const app = express();

// tell Morgan to send its logs of HTTP layer
// to the logger we've imported, instead of the
// default stdout.
app.use(morgan('common', {stream: logger.stream}));
app.use(foo);
app.use(bar);

app.get('*', (req, res) => res.send('ok'));

const listener = app.listen(process.env.PORT, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});
