function rotate(arr, rotations) {
    let effectiveRotations = rotations % arr.length;
    let element = [];
    for (let i = 0; i < effectiveRotations; i++) {
        element = arr.pop();
        arr.unshift(element);

    }
    console.log(arr.join(' '));
}

rotate(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

);