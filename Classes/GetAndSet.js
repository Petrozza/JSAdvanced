class Cat {
    hunger = 50;
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    makesound() {
        console.log(`${this.name} says mjaoo`);
    }
    get isHungry() {
        return this.hunger > 80;
    }
    set isHungry(value) {
        if (value) {
            this.hunger = 100;
        } else{
            this.hunger = 0;
        }
    }
}
let cat = new Cat('Cleo', 'RagDoll');
let cat2 = new Cat('Georg', 'Ulichna');

//accessor properties
console.log(cat.isHungry);