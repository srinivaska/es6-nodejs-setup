export default class HelperUtils {
    constructor() {
        this.str = 'sample Endpoint Working';
    }

    reverse() {
        return this.str.split('').reverse().join('');
    }
}
