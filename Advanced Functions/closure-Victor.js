function createCounter() {
    let counter = 0;
    return function() {
        counter++;
        console.log(counter);
    };
}

const myCounter = createCounter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();

const myCounter2 = createCounter();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
myCounter2();
