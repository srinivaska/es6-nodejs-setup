'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HelperUtils {
    constructor() {
        this.str = 'sample Endpoint Working';
        this.url = 'http://datasource.kapsarc.org/api/datasets/1.0/search/?rows=1';
    }

    reverse() {
        return this.str.split('').reverse().join('');
    }

    async getApiData() {
        return new Promise((resolve, reject) => {
            (0, _request2.default)(this.url, (error, response, data) => {
                if (error) reject(error);else resolve(data);
            });
        });
    }
}
exports.default = HelperUtils;