function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let resul = '';
    
    for (const listItem of listItems) {
        resul += listItem.textContent.trim() + '\n';
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = resul.trim();
};

//ver 2
// function extractText(){
//     const liElements = [...document.getElementsByTagName('li')]};
//     const elementText = liElements.map(e => e.textContent);
//     document.getElementById('result').value = element.join('\n');