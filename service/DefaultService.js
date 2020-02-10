'use strict';

const state = require('../state/state');

/**
 * Fetches current account balance
 *
 * returns Object
 **/
exports.balanceGET = function() {
  return new Promise(function(resolve, reject) {
    resolve({amount: state.resolveCurrentBalance()})
  });
};

