let uniqueNumbers = new Set();
uniqueNumbers.add(2);
uniqueNumbers.add(12);
uniqueNumbers.add(21);
uniqueNumbers.add(2);

console.log(uniqueNumbers);

for (const num of uniqueNumbers) {
    console.log(num);   
}

let mumbersArray = [...uniqueNumbers];

