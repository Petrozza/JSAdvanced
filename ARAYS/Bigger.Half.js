function biggerHalf(arr){
    let result = arr.sort((a, b) => a - b);
    result = result.slice(Math.floor(arr.length / 2));
    
    return result;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
