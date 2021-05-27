let jaggedMatrix = [
    [2, 5, 3, 8],
    [3, 5, 7, 3],
    [-7, 5, 8, 5],
    [1, 2, 3, 4]
];

//print every number on new line
for (let row of jaggedMatrix) {
    for (let num of row) {
        console.log(num);
    }
}

//print every row on new line

for (let row of jaggedMatrix) {
    console.log(row.join(' '));
}