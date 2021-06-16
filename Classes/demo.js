class Cat {
    
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    makesound() {
        console.log(`${this.name} says mjaoo`);
    }
}

let cat = new Cat('Cleo', 'RagDoll');
let cat2 = new Cat('Georg', 'Ulichna');

cat.age = 6;

console.log(cat);
console.log(cat2);

cat.makesound();
cat2.makesound();


 //*************************************** */

class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

    }
    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

    static sayHello() {
        console.log('Hello');
    }

}
let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());

//instance operator
console.log(person instanceof Person);
console.log(typeof person);

//static method
//person.sayHello() //doesn't work
Person.sayHello() 
