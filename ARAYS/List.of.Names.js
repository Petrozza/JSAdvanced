function sorting(arr){
    let result = arr.sort((a, b) => a.localeCompare(b)); 
    for (let i = 1; i <= arr.length; i++) {
        console.log(`${i}.${arr[i-1]}`);
    }
}
sorting(["John", "Bob", "Christina", "Ema"]);