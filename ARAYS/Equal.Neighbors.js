// function solve(matrix) {
//     let neighbours = 0;
//     for (let row = 0; row < matrix.length - 1; row++) {
//         for (let col = 0; col < matrix[row].length; col++) {
//             if (matrix[row][col] == matrix[row + 1][col]) {
//                 neighbours++;
//             }
//             if (matrix[row][col] == matrix[row][col + 1]) {
//                 neighbours++;
//             }
//             if (row == matrix.length - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
//                 neighbors++;
//             }
//         }

//     }
//     return neighbours;
// }

function solve(args) {
    //console.log(`args length ${args[1].length}`);
    let counter = 0;
    for (let row = 0; row < args.length - 1; row++) {
        for (let col = 1; col < args[row].length; col++) {
            if (args[row][col] == args[row + 1][col]) {
                counter++;
            }
            if (args[row][col] == args[row][col - 1]) {
                counter++;
            }
        }
    }

    for (let i = 0; i < args[args.length - 1].length; i++) {
        if (args[args.length - 1][i] == args[args.length - 1][i + 1]) {
            counter++;
        }
    }

    for (let i = 0; i < args.length - 1; i++) {
        if (args[i][0] == args[i + 1][0]) {
            counter++;
        }
    }
    //console.log(counter);
    return counter;
    
}

solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']

]);