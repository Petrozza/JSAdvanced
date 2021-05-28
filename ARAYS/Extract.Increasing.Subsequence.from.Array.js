function makeSeq(arr){
    let incrArray = [];
    let max = Number.MIN_SAFE_INTEGER;
    arr.forEach(el => {
        if (el > max) {
            max = el;
            incrArray.push(el);
        }
    });
    return incrArray;
}
console.log(makeSeq(
    [1, 
        3, 
        8, 
        4, 
        10, 
        12, 
        3, 
        2, 
        24]
        
    ));