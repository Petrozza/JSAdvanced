function solve(inputArr) {
    let heroesArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        let [name, level, items] = inputArr[i].split(' / ');
        level = Number(level);
        items = items !== undefined ? items.split(', ') : [];

        heroesArr.push({name, level, items});
    }
    return JSON.stringify(heroesArr);
}
console.log(solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));