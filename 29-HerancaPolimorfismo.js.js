// 1. Herança
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} faz um som.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); 
        this.breed = breed;
    }

    speak() {
        console.log(`${this.name}, o ${this.breed}, late.`);
    }
}

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    speak() {
        console.log(`${this.name}, o gato ${this.color}, mia.`);
    }
}

// 2. Polimorfismo
let dog = new Dog("Rex", "Pastor Alemão");
let cat = new Cat("Mimi", "branco");

dog.speak(); 
cat.speak(); 

// 3. Reutilização de Código
function describeAnimal(animal) {
    console.log(`Este é ${animal.name}.`);
    animal.speak(); 
}

describeAnimal(dog); 
describeAnimal(cat); 
