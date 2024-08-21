function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    };
}

const person1 = createPerson('Alice', 25);
const person2 = createPerson('Bob', 30);

person1.greet(); 
person2.greet(); 

function createCar(make, model, year) {
    if (year < 2000) {
        throw new Error('Year must be 2000 or later.');
    }

    return {
        make: make,
        model: model,
        year: year,
        getCarInfo: function() {
            return `${this.make} ${this.model} (${this.year})`;
        }
    };
}

try {
    const car1 = createCar('Toyota', 'Corolla', 1999); 
} catch (error) {
    console.error(error.message); 
}

const car2 = createCar('Honda', 'Civic', 2020);
console.log(car2.getCarInfo()); 

function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getCount()); 

counter1.decrement();
console.log(counter1.getCount()); 
