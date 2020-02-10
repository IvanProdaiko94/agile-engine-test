'use strict';

const uuidv4 = require('uuid/v4');
const state = require('../state/state');

/**
 * Commit new transaction to the account
 *
 * body TransactionBody Transaction object
 * returns Transaction
 **/
exports.commitTransaction = function(body) {
  return new Promise(function(resolve, reject) {
    const transaction = {
      id: uuidv4(),
      type: body.type,
      amount: body.amount,
      effectiveDate: Date.now().toString(),
    };
    state.commitTransaction(transaction);
    resolve(transaction);
  });
};


/**
 * Find transaction by ID
 * Returns a single transaction object
 *
 * transactionId UUID ID of transaction to return
 * returns Transaction
 **/
exports.getTransactionById = function(transactionId) {
  return new Promise(function(resolve, reject) {
    resolve(state.resolveTransactionsByID(transactionId));
  });
};


/**
 * Fetches transactions history
 *
 * returns List
 **/
exports.transactionsHistory = function() {
  return new Promise(function(resolve, reject) {
    resolve(state.resolveTransactionsHistory())
  })
};

