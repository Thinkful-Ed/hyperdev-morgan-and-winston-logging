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

// error handling middleware
app.use((err, req, res, next) => {
  logger.error(err);
  res.status(500).json({error: 'Something went wrong'}).end();
});

app.listen(process.env.PORT || 8080, () => logger.info(
  `Your app is listening on port ${process.env.PORT || 8080}`));
