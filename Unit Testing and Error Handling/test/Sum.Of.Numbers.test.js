const assert = require('chai').assert;
const sum = require('../Sum.Of.Numbers')

describe('Test sum functionallity', () => {
    it('Should add posityive numbers', () => {
        //Arrange
        let input = [1, 2, 3, 4, 5];
        let expectedResult = 15;
        //Act
        let actualResult = sum(input);
        //Assert
        // if (expectedResult = actualResult) {
        //     console.log('Passing');
        // } else {
        //     throw new Error('Sum should be 15')
        // }
        assert.strictEqual(actualResult, expectedResult);
    });

    it('Should return false when ading positive numbers', () => {
        let input = [10, 20, 30];
        let expectedResult = 15;
        let actualResult = sum(input);
        assert.notEqual(actualResult, expectedResult);
    });

    it('Should pass when adding negative numb', () => {
        let input = [-1, -2, -3];
        let expectedResult = -6;
        let actualResult = sum(input);
        assert.strictEqual(actualResult, expectedResult);
    });
});