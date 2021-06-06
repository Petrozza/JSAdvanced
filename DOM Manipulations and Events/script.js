//Add hero to list

function addHero() {
    let heroNameElement = document.getElementById('hero-name');
    let heroListElement = document.getElementById('hero-list');

    //adding hero dangerously
    //heroListElement.innerHTML += `<li>${heroNameElement.value}</li>`

    //add her list correctly
    let newHeroItemElement = document.createElement('li');
    newHeroItemElement.textContent = heroNameElement.value;
    heroListElement.appendChild(newHeroItemElement);

    //add hero by clone element
    let firsListItemElement = heroListElement.children[0];
    let newClonedElement = firsListItemElement.cloneNode();
    newClonedElement.textContent = heroNameElement.value;
    heroListElement.appendChild(newClonedElement); //or prepend

    //clear input
    heroNameElement.value = '';

}
//Delete last hero
function deleteHero() {
    let heroListElement = document.getElementById('hero-list');
    let lastHeroElement = heroListElement.children[heroListElement.children.length-1];
    //heroListElement.removeChild(lastHeroElement); //delete from parent
    lastHeroElement.remove();
}

//with HTML Attributes element
function heroesMouseOverHandler(){
    console.log('Show hero');
}

//using DOM element properties
let heroNameElement = document.getElementById('hero-name');
heroNameElement.onfocus =  function() {
    console.log('Start typing a hero!!');
}

//using DOMevent handler  - the best method
heroNameElement.addEventListener('input', heroNameInputHandler);

function heroNameInputHandler(e) {
    console.log(heroNameElement.value);
    console.log(e);
}

//click on hero - not the best way
// let heroListElements = document.querySelectorAll('#hero-list li');
// for (const heroElement of heroListElements) {
//     heroElement.addEventListener('click', (e) => {
//         console.log(e.target.textContent);
//     });
// };

//click on hero - the best way
let heroListElement = document.getElementById('hero-list');
heroListElement.addEventListener('click', (e) => {
    if (e.target.tagName == 'LI') {
        console.log(e.target.tagName);
    }
    //or   
    // if (e.target.tagName != 'LI') {
    //     return;
    // }
})

