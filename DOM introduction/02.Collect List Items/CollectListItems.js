function extractText() {
    let listItems = document.querySelectorAll('#items li');
    let resul = '';
    
    for (const listItem of listItems) {
        resul += listItem.textContent.trim() + '\n';
    }

    let resultElement = document.getElementById('result');
    resultElement.textContent = resul.trim();
};