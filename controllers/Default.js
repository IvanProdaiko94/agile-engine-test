'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.balanceGET = function balanceGET (req, res, next) {
  Default.balanceGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
