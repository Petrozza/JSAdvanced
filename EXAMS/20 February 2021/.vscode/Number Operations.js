const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

const { describe, it } = require('mocha');
const { assert } = require('chai');


describe("Test operations", ()=> {
    it("Shoud test power number", () => {
        
        assert.equal(numberOperations.powNumber(5), 25);
        assert.equal(numberOperations.powNumber(0), 0);
        assert.equal(numberOperations.powNumber(-5), 25);
        

    });

    it("Shoud test input value is number", () => {
        
        assert.throw(() => {
            numberOperations.numberChecker('shit')
        }, Error);
    });

    it("check if number is lower than 100", () => {
        
        assert.equal(numberOperations.numberChecker(50), 'The number is lower than 100!');
        assert.equal(numberOperations.numberChecker(50), 'The number is lower than 100!');
        assert.equal(numberOperations.numberChecker(5.0), 'The number is lower than 100!');
    });

    it("check if number is under 100", () => {
        
        assert.equal(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
        assert.equal(numberOperations.numberChecker(150), 'The number is greater or equal to 100!');
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!');
    });

    it("check if arrays is summed excellent", () => {
        let array1 = [1, 2, 3];
        let array2 = [3, 2, 1];
        let array3 = [-3, -2, -1];
        let array4 = [-3, -2, -1];
        let array5 = [];
        let array6 = [-3, -2, -1];
        assert.deepEqual(numberOperations.sumArrays(array1, array2), [4, 4, 4]);
        assert.deepEqual(numberOperations.sumArrays(array3, array4), [-6, -4, -2]);
        assert.deepEqual(numberOperations.sumArrays(array5, array6), [-3, -2, -1]);
        
    });

    
 });
