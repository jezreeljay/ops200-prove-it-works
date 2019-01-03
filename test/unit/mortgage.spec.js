const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

describe('Mortgage Calculator', () => {
    let mortgage = null;

    beforeEach(() => {
        mortgage = new Mortgage();
    });

    it('Should have a caluclulation constructor', () => {
        expect(mortgage.constructor).to.exist;
    });

    it('Should have a caluclulation function', () => {
        expect(mortgage.monthlyPayment).to.exist;
    });

});