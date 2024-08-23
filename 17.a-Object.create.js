const animalPrototype = {
    speak() {
        console.log(`${this.name} makes a sound.`);
    }
};

const dog = Object.create(animalPrototype);
dog.name = 'Rex'; 
dog.breed = 'Labrador'; 

dog.speak(); 

console.log(Object.getPrototypeOf(dog) === animalPrototype); 

console.log(dog.speak === animalPrototype.speak); 

const catPrototype = {
    speak() {
        console.log(`${this.name} says meow!`);
    }
};

const cat = Object.create(catPrototype);
cat.name = 'Whiskers';

cat.speak(); 

console.log(Object.getPrototypeOf(cat) === catPrototype); 
