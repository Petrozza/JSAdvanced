function subSum(array, startIndex, endIndex) {
if (!Array.isArray(array)) {
    return NaN;
}
if (startIndex < 0 ) {
    startIndex  = 0;
}
if (endIndex > array.length - 1) {
    endIndex = array.length - 1;
}
return array
.slice(startIndex, endIndex + 1)
.map(Number)
.reduce((a, x) => a + x, 0);
}

function test1_subSum() {
    //Arange
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIndex = 3;
    let endIndex = 300;
    let expectedResult = 150;

    //Act
    let actualResult = subSum(numbers, startIndex, endIndex);

    //Assert

    if (actualResult === expectedResult) {
        console.log('Test 1 is passing!');
    } else {
        console.error('Test 1 failed');
    }
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
test1_subSum([10, 20, 30, 40, 50, 60], 3, 300);