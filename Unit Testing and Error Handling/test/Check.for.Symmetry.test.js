const isSymmetric = require('../Check.for.Symmetry');
const {assert, expect} = require('chai');
require('chai').should();

describe('Test symmetric functionallity', () => {
    it('Should pass whhen symmatric array is provided', () => {
        let input = [1,2,3,2,1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);

    });

    it('Should fail whhen non symmatric array is provided', () => {
        let input = [1,2,3,3,1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);

        assert.equal(actualResult, expectedResult);

    });

    it('Should fail whhen non Array is provided as argument', () => {
        let expectedResult = false;

        assert.equal(isSymmetric(null), expectedResult);
        assert.equal(isSymmetric({}), expectedResult);
        assert.equal(isSymmetric(''), expectedResult);
        assert.equal(isSymmetric(0), expectedResult);
        assert.equal(isSymmetric(true), expectedResult);
        assert.equal(isSymmetric(false), expectedResult);
        assert.equal(isSymmetric(undefined), expectedResult);

    });

    it('Should pass whhen empty array is provided', () => {
        let actualResult = isSymmetric([]);
        expect(actualResult).to.be.true;
    });

    it('Should fail whhen mixed input is provided', () => {
        let actualResult = isSymmetric(['1', 1]);
        expect(actualResult).to.be.false;

    });

    it('Should fail whhen symmetric string is provided', () => {
        let actualResult = isSymmetric(['gosho','pesho', 'gosho']);
        expect(actualResult).to.be.true;

    });
});