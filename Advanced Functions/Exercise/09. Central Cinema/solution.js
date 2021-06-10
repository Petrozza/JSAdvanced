function solve() {
    // select elements
    let onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', onScreenHandler);


    function onScreenHandler(e) {
        e.preventDefault();

        //implement add move functionality
        //attach event listener on [on screen] button 
        //get input value for movies
        //convert values where needed
        //attach html structure for movie
        //create html structure to movies on screen selection


        let movieInputs = document.querySelectorAll('#container input');
        let nameInput = movieInputs[0];
        let hallInput = movieInputs[1];
        let priceInput = movieInputs[2];

        let name = nameInput.value;
        let hall = hallInput.value;
        let price = priceInput.value;

        if (name.trim() !== '' &&
            hall.trim() !== '' &&
            price.trim !== '' &&
            !isNaN(Number(price))
        ) {
            price = Number(price).toFixed(2);
            let li = document.createElement('li');

            let nameSpan = document.createElement('span');
            nameSpan.textContent = name;

            let hallStrong = document.createElement('strong');
            hallStrong.textContent = `Hall: ${hall}`;

            let rightSectionDiv = document.createElement('div');
            let priceStrong = document.createElement('strong');
            priceStrong.textContent = price;

            let ticketsSoldInput = document.createElement('input');
            ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';
            //archiveButton = addEventListener('click', archiveMovie);

            rightSectionDiv.appendChild(priceStrong);
            rightSectionDiv.appendChild(ticketsSoldInput);
            rightSectionDiv.appendChild(archiveButton);

            li.appendChild(nameSpan);
            li.appendChild(hallStrong);
            li.appendChild(rightSectionDiv);

            let moviesUl = document.querySelector('#movies ul');
            moviesUl.appendChild(li);
        }
    }

    function archiveMovie(e) {
        let movieLi = e.target.parentElement.parentElement;
        let ticketsSoldInput = movieLi.querySelector('div input');
        let ticketsSold = ticketsSoldInput.value;

        if (ticketsSold.trim !== '' &&
            isNaN(Number(ticketsSold))) {

            ticketsSold = Number(ticketsSold);
            let priceStrong = movieLi.querySelector('div strong');
            let price = Number(priceStrong.textContent);

            let hallStrong = movieLi.querySelector('strong');
            let totalPrice = price * ticketsSold;
            hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

            let rightDiv = movieLi.querySelector('div');
            rightDiv.remove();

            let archiveUl = document.querySelector('#archive ul');
            archiveUl.appendChild(movieLi);
        }
    }





    //implement archive movie functionality

    //attach event listener to movie's archive button 

    //get input value for current movie to archive

    //convert values where needed
    //attach html structure for archived movie
    //create html structure to movies archive selection


    //implement archived movie delete functionality

    //attach event listener to movie's delete button 
    //create html structure of a deleted movies from dom
    //implement archive clear button functionality
    //caches;ea archive li elements from dom


}