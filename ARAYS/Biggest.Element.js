function bigger(arr) {
    const max = Math.max(...[].concat(...arr));
    return max;
}
console.log(bigger([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
    ]));