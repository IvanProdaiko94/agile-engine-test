'use strict';

var utils = require('../utils/writer.js');
var Transactions = require('../service/TransactionsService');

module.exports.commitTransaction = function commitTransaction (req, res, next) {
  var body = req.swagger.params['body'].value;
  Transactions.commitTransaction(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTransactionById = function getTransactionById (req, res, next) {
  var transactionId = req.swagger.params['transactionId'].value;
  Transactions.getTransactionById(transactionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.transactionsHistory = function transactionsHistory (req, res, next) {
  Transactions.transactionsHistory()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
