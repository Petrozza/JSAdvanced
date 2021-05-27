function solve(n, k){
    let result = [1]
    for (let i = 1; i < n; i++) {
        result[i] = sumLastK(result, k)
    }
    return result;

    function sumLastK(arr, k){
        k = arr.length > k ? k : arr.length;
        let sum = 0;
        for (let i = 1; i <= k; i++) {
           sum += arr[arr.length-i];
        }
        return sum;
    }
}



console.log(solve(6, 3)); 