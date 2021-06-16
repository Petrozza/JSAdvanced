//basic usage
let map = new Map();
map.set('name', 'Acho');
map.set('age', 51);

console.log(map.get('name'));

if (map.has('name')) {
    map.delete('name');
}


//iterte map

let people = new Map();
people.set(100, 'Pesgo' );
people.set(200, 'Pezvw' );
people.set(300, 'Pezvs' );
people.set(400, 'Pezvee' );

let keys = people.keys();
console.log(keys)

let values = people.values();
console.log(values);

for (const name of people.values()) {
    console.log(name);
}

for (const number of people.keys()) {
    console.log(number);
    console.log(people.get(number));
}

for (const kvp of people.entries()) {
    console.log(kvp[0], kvp[1]);
}

for (const [number, name] of people.entries()) {
    console.log(name, number);
}
