function focused() {
    //select all inoput fields
    let inputs = document.querySelectorAll('input[type="text"]');
    Array.from(inputs).forEach(i => {
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    })
    
    function onFocus(e) {
        //onFocus - select input parent and aply class 'focused'
        e.target.parentNode.className = 'focused';
    }

    function onBlur(e) {
        //onBlur -> select input parent - remove class focused
        e.target.parentNode.className = '';
    }
}