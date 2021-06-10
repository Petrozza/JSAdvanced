
let sqr = (x) => Math.pow(x, 2);
console.log(sqr(3));

//********************
function greet(name, message) {
    console.log(`hey ${name} ${message}`);
}

// let greetMariya = function(message) {
//     greet('Mariya', message);
// };

// or
let greetMariya = greet.bind(null, 'Mariya')

greetMariya('Hi');
greetMariya('fuck');
greetMariya('off');
greetMariya('!');

//Currying

let greetCurry = function(name) {
    return function(message) {
        console.log(`hey ${name} ${message}`);
    };
};

let greetMariya2 = greetCurry('Mariya');
greetMariya2('Hi')

greetCurry('Gosho')('Kvo staa');


