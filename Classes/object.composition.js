//complex object example

let person = {
    name: 'Pesho',
    age: 20,
    isMale: true,
    grades: [2, 3, 4],
    cat: {
        name: 'Celio',
        age: 5,
        toys: [
            {name: 'mice', color: 'pink'},
            {name: 'baloon', color: 'gold'},
        ]
    },
    sayHello: function() {
        console.log('Hello');
    }
}
//accessing nested property
console.log(person.cat.toys[0].color);

//object composition naive way

const canPrint = function () {
    console.log(`${this.name} can print!`);
}
const canScan = function () {
    console.log(`${this.name} can scan!`);
}

const printer = {
    name: 'Xerox',
    print: canPrint
}

const scanner = {
    name: 'HP',
    scan: canScan
}

const copier = {
    name: 'TTT',
    print: canPrint,
    scan: canScan
}

printer.print();
copier.print();
copier.scan();
scanner.scan();