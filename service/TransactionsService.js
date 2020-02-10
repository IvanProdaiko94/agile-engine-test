'use strict';


/**
 * Commit new transaction to the account
 *
 * body TransactionBody Transaction object
 * returns Transaction
 **/
exports.commitTransaction = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "credit",
  "effectiveDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find transaction by ID
 * Returns a single transaction object
 *
 * transactionId UUID ID of transaction to return
 * returns Transaction
 **/
exports.getTransactionById = function(transactionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "credit",
  "effectiveDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Fetches transactions history
 *
 * returns List
 **/
exports.transactionsHistory = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "credit",
  "effectiveDate" : "2000-01-23T04:56:07.000+00:00"
}, {
  "amount" : 0.80082819046101150206595775671303272247314453125,
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "type" : "credit",
  "effectiveDate" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

