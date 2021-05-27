function nthElement(arr, n) {
    let nthElementArr = [];
    let result = [];
    for (let i = 0; i < arr.length; i += n) {
        result = nthElementArr.push(arr[i]);
    }
    return nthElementArr;
    //console.log(result.join('\r\n'));
}
nthElement(['dsa',
'asd', 
'test', 
'tset'], 
2

);