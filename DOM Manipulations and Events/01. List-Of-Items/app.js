function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let liItemElement = document.createElement('li');
    liItemElement.textContent = newItemTextElement.value;
    let itemsElement = document.getElementById('items');
    itemsElement.appendChild(liItemElement);

    newItemTextElement.value = '';
}