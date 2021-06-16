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


