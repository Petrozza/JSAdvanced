function createObj(inputArr){
    const obj = {};
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 == 0) {
            let key = inputArr[i];
            obj[key] = Number(inputArr[i+1]);
            //obj[inputArr[i]] = Number(inputArr[i+1]);
        }
    }
    console.log(obj);
}

createObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);