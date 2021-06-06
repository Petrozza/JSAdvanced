function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');
    let c = document.createElement('li');
    liItemElement.textContent = newItemTextElement.value;
    itemsElement.appendChild(liItemElement);
}