function createTown(townArr){

    const towns = {};
    for (let townAsString of townArr) {
        let tokens = townAsString.split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);
        
        if (towns[name] == undefined) {
            
            towns[name] = population;
        } else{
            towns[name] += population;
        }
    }
    for (let name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
}

createTown(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);