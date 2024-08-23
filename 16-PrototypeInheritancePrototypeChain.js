function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name); 
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; 

Dog.prototype.bark = function() {
    console.log(`${this.name} the ${this.breed} barks.`);
};

const myDog = new Dog('Buddy', 'Golden Retriever');

myDog.speak(); 
myDog.bark(); 

console.log(myDog instanceof Dog);    
console.log(myDog instanceof Animal); 
console.log(myDog instanceof Object); 

console.log(Object.getPrototypeOf(myDog));           
console.log(Object.getPrototypeOf(Object.getPrototypeOf(myDog))); 
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(myDog)))); 
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(myDog))))); 

