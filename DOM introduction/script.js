//change heading
            let headingelEment = document.getElementById('superherolist-heading');
            headingelEment.textContent += ' BASH';

            //show inner HTML/text
            let superherosectionElement = document.getElementById('superhero-section');
            console.log(superherosectionElement.innerHTML);
            console.log(superherosectionElement.textContent);

            //change background
            let sitewrapper  =document.getElementById('wrapper');
            sitewrapper.style.backgroundColor = 'lightblue';

            //Get value from input
            function addSuperhero() {
                let superHeroNameInputElement = document.getElementById('superhero-name');
                let superheroName = superHeroNameInputElement.value;
                console.log(superHeroNameInputElement.value);

                //Delete value when Add button is clicked
                superHeroNameInputElement.value = '';

                //Add hero to list
                let superHeroListElement = document.getElementById('superhero-list');
                superHeroListElement.innerHTML += `<li class="good">${superheroName}</li>`;//dangerous
            }

            //targeting elements by class - returns HTML collection

            let goodsuperheroelements = document.getElementsByClassName('good');
            goodsuperheroelements[0].textContent += ' Pederaz' ;
            for (const heroElement of goodsuperheroelements) { //this woks in Judje
                console.log(heroElement.textContent);
            }
            
            //targeting elements by css selector - returns Nodelist
            let allSuperHeroLiElements = document.querySelectorAll('#superhero-list li');
            allSuperHeroLiElements.forEach((x) => { //doesn't work in Judge
                console.log(x.textContent);
            })

            //Convert NodeList or HTML Collection to JS array
            let goodSuperHeroes = Array.from(goodsuperheroelements); // for Judge
            let goodSuperHeroes2 = [...goodsuperheroelements] //not for Judge
            console.log(goodSuperHeroes);

            //Get parrent element and change background
            let bodyElement = sitewrapper.parentElement;
            bodyElement.style.backgroundColor = 'lightblue';

            //Get children of element
            let superHeroListElement = document.getElementById('superhero-list');
            let childrenElements = superHeroListElement.children;
            console.log(childrenElements.textContent);

            //use show/hide css logic
            function toggleSuperheroes(){
                let toggleheroListElement = document.getElementById('toggle-heroes-button');
                
                if (superHeroListElement.style.display == 'none') {
                    superHeroListElement.style.display = 'block';
                    toggleheroListElement.textContent = 'hide';
                }else{
                    superHeroListElement.style.display = 'none';
                    toggleheroListElement.textContent = 'Show';
                }

            }

            //Add stripped style - nth element
            let oddHeroes = document.querySelectorAll('#superhero-section li:nth-of-type(2n)');
            for (const hero of oddHeroes) {
                hero.style.backgroundColor = 'lightgray';
            }
