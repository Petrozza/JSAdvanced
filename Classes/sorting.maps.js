let map = new Map();

map.set("one", 1);

map.set("eight", 8);

map.set("two", 2);

//convert map to array of arrays
let mapEntries = map.entries();
let numbers = Array.from(mapEntries);

//sort array of arrays
numbers.sort((a, b) => a[1] - b[1]);
numbers.sort((a, b) => a[0] - b[0]);

console.log(numbers);

//back to map

let orderedMap = new Map(numbers);
console.log(orderedMap);