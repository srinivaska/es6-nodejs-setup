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
    const response = Helperservice.reverse();
    res.json({
        reverseString: response,
        status: 'success',
        statusCode: 200
    });
});

/* Get Data from thirdparty API with async await */
router.get('/getApiData', async (req, res) => {
    const response = await Helperservice.getApiData();
    res.json({
        data: response,
        status: 'success',
        statusCode: 200
    });
});

exports.default = router;