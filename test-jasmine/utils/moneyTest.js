import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency',() => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');//lets us compare one value to another value
    });//creates the test

    it('works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');//expect gives us the object and then we use toEqual
    });

    it('round up to nearest cents', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    })
});;