import request from 'request';

export default class HelperUtils {
    constructor() {
        this.str = 'sample Endpoint Working';
        this.url = 'http://datasource.kapsarc.org/api/datasets/1.0/search/?rows=1';
    }

    reverse() {
        return this.str.split('').reverse().join('');
    }

    async getApiData() {
        return new Promise((resolve, reject) => {
            request(this.url, (error, response, data) => {
                if (error) reject(error);
                else resolve(data);
            });
        });
    }
}
