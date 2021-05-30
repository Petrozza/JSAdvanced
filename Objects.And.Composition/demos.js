//let number = 10;

// const executeCommand = {
//     add() {
//         number++;
//     },
//     remove() {
//         number--;
//     },
//     reset() {
//         number=0;
//     } 
// }

// const applyOperation =  {

//         chop() {num /= 2;},
//         dice() {num /= Math.sqrt(num);},
//         spice() {num += 1;},
//         bake() {num *= 3;},
//         fillet() {num = num * 0.8;}


// }
// applyOperation ['add']();
// console.log(number);

// let student = {
//     firstName: 'Angel',
//     lastName: 'Petrozza',
//     age: 51,
//     location: {
//         coordinates:{lat: 42.968, lng: 23.233},
//         locationName: 'Sofia',
//     }
// }
// console.log(student);
// console.log(student.location.lng);

// const {location: {coordinates}}  =student;
// console.log(coordinates);


function print() {
    console.log(`${this.name} is printing a page`);
}

function scan() {
    console.log(`${this.name} is scanning a document`);
}

const printer = {
    name: 'ACME Printer',
    print
};

const scanner = {
    name: 'Initech Scanner',
    scan
};

const copier = {
    name: 'ComTron Copier',
    print,
    scan
};

printer.print();
copier.scan();
copier.print();