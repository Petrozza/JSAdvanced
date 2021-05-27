function solve(arr){
    let resultArr = [];
    for (let element of arr) {
        if (element < 0) {
            resultArr.unshift(element);
        }else{
            resultArr.push(element);
        }
    }
    for (let piece of resultArr) {
        console.log(piece);
    }
}
solve([7, -2, 8, 9]);