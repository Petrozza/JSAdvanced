function deleteByEmail() {
    //read input field value
    const email = document.querySelector('input[name="email"]').value;
    console.log(email);
    //select all table cell from last column
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    //iterate over cells

    let deleted = false;
    for (const row of rows) {
    //if text matches - delete row
    if(row.children[1].textContent == email){
        // -- remove row from parentNode
        row.parentNode.removeChild(row);
        deleted = true;
        document.getElementById('result').textContent = 'Deleted.';
    }
    
    }  if (deleted != true) {
        //display result message
        document.getElementById('result').textContent = 'Not found.';
    } 

}