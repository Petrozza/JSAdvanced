const assert = require('chai').assert;
const rgbToHexColor = require('../RGB.to.Hex');

describe('Check main functionallity', () => {
    it('Should return udefined when non integer is input', () => {
        let expectedResult = undefined;
        let actualResult = rgbToHexColor(150, '150', 100);
        let actualResult1 = rgbToHexColor(150, 150, '150');
        let actualResult2 = rgbToHexColor('150', 150, 150);
        let actualResult3 = rgbToHexColor(true, 51, 51);
        let actualResult4 = rgbToHexColor(2.44, 51, 51);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult1);
        assert.equal(expectedResult, actualResult2);
        assert.equal(expectedResult, actualResult3);
        assert.equal(expectedResult, actualResult4);

    });

    it('Should return udefined when input is not between 0 and 255', () => {

        let expectedResult = undefined;
        let actualResult = rgbToHexColor(-150, 150, 100);
        let actualResult1 = rgbToHexColor(150, 270, 100);
        let actualResult2 = rgbToHexColor(150, 150, -100);

        assert.equal(expectedResult, actualResult);
        assert.equal(expectedResult, actualResult1);
        assert.equal(expectedResult, actualResult2);

    });

    it('Should return hex string from rgb color', () => {
        //let input = 16, 12, 13;

        let expectedResult = '#100C0D';
        let expectedResult1 = '#FF9EAA';

        let actualResult = rgbToHexColor(16, 12, 13);
        let actualResult1 = rgbToHexColor(16, 12, 13);


        assert.equal(actualResult, expectedResult);
        assert.notEqual(actualResult1, expectedResult1);

    });

    it('Should return udefined when input is empty', () => {

        let expectedResult = undefined;
        let actualResult = rgbToHexColor();

        assert.equal(expectedResult, undefined);

    });

    it('Should work with bounding values', () => {
        //let input = 16, 12, 13;

        let expectedResult = '#000000';
        let expectedResult1 = '#FFFFFF';

        let actualResult = rgbToHexColor(0,0,0);
        let actualResult1 = rgbToHexColor(255, 255, 255);


        assert.equal(actualResult, expectedResult);
        assert.equal(actualResult1, expectedResult1);

    });
})