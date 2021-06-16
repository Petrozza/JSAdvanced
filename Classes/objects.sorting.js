let numbers = {
    'one': 1,
    'eight':8, 
    'two': 2,
}

let keys = Object.keys(numbers);
let values = Object.values(numbers);
let entries = Object.entries(numbers);

let sortedArray = Object.entries(numbers)
.sort((a, b) => a[1] - b[1]);

console.log(sortedArray);

let sortedObject = Object.fromEntries(sortedArray);
console.log(sortedObject);