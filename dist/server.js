'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
app.use('/', _routes2.default);
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log('App running on port 3000');
});

module.exports = server;