const { expect, assert } = require('chai');

const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof (num1) !== 'number' || typeof (num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};




describe("check numbers", function () {

    it("all params are numbers", function () {
        let num1 = 3;
        let num2 = 4;
        let num3 = '';
        let num4 = -4;

        assert.equal(testNumbers.sumNumbers(num1, num2), 7.00);
        assert.equal(testNumbers.sumNumbers(num1, num4), -1.00);
        assert.equal(testNumbers.sumNumbers(num2, num3), undefined);
        assert.equal(testNumbers.sumNumbers(num3, num1), undefined);

    });

    it("parse and chack even and odd", function () {
        let input = 3;
        let input2 = '3';
        let input3 = 'shit';
        let input4 = '4';

        assert.equal(testNumbers.numberChecker(input), 'The number is odd!');
        assert.equal(testNumbers.numberChecker(input2), 'The number is odd!');
        assert.throw(() => testNumbers.numberChecker(input3), 'The input is not a number!');
        assert.equal(testNumbers.numberChecker(input4), 'The number is even!');

    });

    it("check average sum", function () {
        let arr = [1, 2, 3];


        assert.equal(testNumbers.averageSumArray(arr), 2);


    });


});
     






