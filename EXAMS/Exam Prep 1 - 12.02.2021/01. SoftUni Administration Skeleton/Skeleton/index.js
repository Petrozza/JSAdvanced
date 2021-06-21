function solve() {
    const formControls = document.querySelectorAll('.form-control input');
    const lecture = formControls[0];
    const date = formControls[1];
    const modulName = document.querySelector('.select');

    //create additional mine function
    function createElement(type, text, attributes = []) {
        let element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        attributes
            .map(attr => attr.split('='))
            .forEach(({ name, value }) => {
                element.setAttribute(name, value);
            })

        return element;
    }

    function add() {
        if (lecture.value === '' || date.value === '' || modulName === 'Select module') {
            return;
        }

        let lectureName = lecture.value;
        let dateString = date.value;

        const lectureTitle = '';

        const delBtn = createElement('button', 'Del', ['class=red']);
        const lectureH4 = createElement('h4', lectureTitle);
    }

    document.querySelector('.container').addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.tagName !== 'BUTTON') {
            return;
        }

        

        if (e.target.textContent === 'Del') {

        } else if (e.target.textContent === 'Add') {
            
            add();
        }
    })
};