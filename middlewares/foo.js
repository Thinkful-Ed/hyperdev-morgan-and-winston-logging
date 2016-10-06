'use strict';
const {logger} = require('../utilities/logger');

const myEvenBetterFunc = () => {
  logger.info('`myEvenBetterFunc` running');
  logger.warn('be forwarned, it\'s gonna blow up');
  try {
    throw "You're exceptional!";
  }
  catch (e) {
    logger.error(e);
  }
};

const foo = (req, res, next) => {
  myEvenBetterFunc();
  next();
};

module.exports = {foo};
