'use strict';

const state = require('../state/state');

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.commitTransaction = function commitTransaction (req, res, next) {
  const transactionBody = req.swagger.params['body'].value;
  let currentBalance = state.resolveCurrentBalance();
  if (Math.sign(transactionBody.amount) !== 1) {
    return Promise.reject().catch(() => {
      utils.writeJson(res, {"message": "input is not valid"}, 400);
    })
  } else if (transactionBody.type === state.ActionCredit && currentBalance - transactionBody.amount < 0) {
    return Promise.reject().catch(() => {
      utils.writeJson(res, {"message": "negative balance"}, 400);
    })
  }

  Transactions.commitTransaction(transactionBody)
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};

module.exports.getTransactionById = function getTransactionById (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  Transactions.getTransactionById(transactionId)
    .then(function (response) {
      if (typeof response !== 'object' || response === null) {
        return Promise.reject({"message": `transaction with id ${transactionId} is not found`})
      }
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 404);
    });
};

module.exports.transactionsHistory = function transactionsHistory (req, res, next) {
  Transactions.transactionsHistory()
    .then(function (response) {
      utils.writeJson(res, response, 200);
    })
    .catch(function (response) {
      utils.writeJson(res, response, 400);
    });
};
