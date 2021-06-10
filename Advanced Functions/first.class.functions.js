function hello(name) {
    return `Hello , ${name}`;
}

function fancyHello(name) {
    return `Hi there mr. ${name}`;
}

function greet(personName, sayHello) {
    return sayHello(personName);
}

console.log(greet('peshko', hello));
console.log(greet('Stamat', fancyHello));
