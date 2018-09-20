'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HelperUtils {
  constructor() {}

  reverse(str) {
    return str.split('').reverse().join('');
  }
}
exports.default = HelperUtils;