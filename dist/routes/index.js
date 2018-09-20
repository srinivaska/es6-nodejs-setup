'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helperUtils = require('../utils/helperUtils');

var _helperUtils2 = _interopRequireDefault(_helperUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Helperservice = new _helperUtils2.default();
const router = _express2.default.Router();

/* This routes Serves application home page */
router.get('/', (req, res) => {
  res.send('Application Running');
});

/* sample end point */
router.get('/getData', async (req, res) => {
  const str = 'sample Endpoint Working';
  let response = Helperservice.reverse(str);
  res.json({
    String: str,
    reverseString: response,
    status: 'success',
    statusCode: 200
  });
});

exports.default = router;