function readJSON(jasonString) {
    let arr = JSON.parse(jasonString);
    console.log(arr);
}
readJSON('[{ "Name": "Stamat", "Score": 5.5 },{ "Name": "Rumen", "Score": 6 }]');