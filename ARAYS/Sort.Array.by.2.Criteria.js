function sortArray(inputArray) {

    inputArray.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (b.length === b.length) {
            return b.localeCompare(b);
        } else {
            return -1;
        }
    }).forEach(element => console.log(element));
}

sortArray(['alpha', 
'beta', 
'gamma']
);