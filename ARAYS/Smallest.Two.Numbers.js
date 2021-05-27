function smallest(arr){
    let sorted = arr.sort((a, b) => a - b);
    let result = sorted.slice(0, 2)
    console.log(result);
}
smallest([3, 0, 10, 4, 7, 3]);
