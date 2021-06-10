function solution(a) {
    let result = a;
    function innerSum(b) {
        return result + b;
    }
    return innerSum;
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
