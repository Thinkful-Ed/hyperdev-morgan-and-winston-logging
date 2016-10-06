'use strict';
const {logger} = require('../utilities/logger');

const myGreatFunc = () => {
  logger.debug('`myGreatFunc` running');
  logger.info('better catch it');
};

const bar = (req, res, next) => {
  myGreatFunc();
  next();
}

module.exports = {bar}