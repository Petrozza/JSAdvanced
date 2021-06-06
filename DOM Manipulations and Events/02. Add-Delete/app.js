function addItem() {

    let newItemTextElement = document.getElementById('newItemText');
    let itemsElement = document.getElementById('items');
    let c = document.createElement('li');
    liItemElement.textContent = newItemTextElement.value;

    //add delete button
    let deleteButton = document.createElement('a');
    deleteButton.setAttribute('href', '#');
    deleteButton.textContent = '[Delete]';

    //attach evenet to delete button
    deleteButton.addEventListener('click', (e) =>{
        e.currentTarget.parrentNode.remove();
    })

    liItemElement.appendChild(deleteButton);
    itemsElement.appendChild(liItemElement);

    newItemTextElement.value = '';
}