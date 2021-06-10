let returnNumber = () => 10;
let result = ((5) + (returnNumber()));

//IIFE
let calculate = (function(a, b) {
    return a + b;
})(1, 10)

console.log(calculate);

