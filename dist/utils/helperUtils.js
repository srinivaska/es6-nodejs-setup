'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
class HelperUtils {
    constructor() {
        this.str = 'sample Endpoint Working';
    }

    reverse() {
        return this.str.split('').reverse().join('');
    }
}
exports.default = HelperUtils;