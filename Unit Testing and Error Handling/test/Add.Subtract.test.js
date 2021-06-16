const assert = require('chai').assert;
const createCalculator = require('../Add.Subtract');

describe('Test main functionallity', () => {
    let cal ;
    beforeEach( function() {
        cal = createCalculator();
    });

    it('Should return 0 for get', () => {
        let value = cal.get();
        let expectedResult = 0;
        let actualResult = cal.get(value);
        assert.equal(actualResult, expectedResult);
    });

    it('Should add properly', () => {
        let expectedResult = 8;
        cal.add(5);
        cal.add(3);
        
        let actualResult = cal.get();
        assert.equal(actualResult, expectedResult);
    });

    it('Should subtract properly', () => {
        let expectedResult = -8;
        cal.subtract(5);
        cal.subtract(3);
        
        let actualResult = cal.get();
        assert.equal(actualResult, expectedResult);
    });

    it('Should add and subtract mixed properly', () => {
        let expectedResult = -2;
        cal.add(5);
        cal.add('-5')
        cal.subtract(5);
        cal.add('3');
        
        let actualResult = cal.get();
        assert.equal(actualResult, expectedResult);
    });
})