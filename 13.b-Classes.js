class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const person1 = new Person('Alice', 25);
person1.greet(); 

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age); 
        this.jobTitle = jobTitle;
    }

    work() {
        console.log(`${this.name} is working as a ${this.jobTitle}.`);
    }
}

const employee1 = new Employee('Charlie', 28, 'Engineer');
employee1.greet(); 
employee1.work();  

class Car {
    #mileage = 0; 

    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    drive(distance) {
        this.#mileage += distance;
        console.log(`The car has been driven for ${distance} miles.`);
    }

    getMileage() {
        return this.#mileage;
    }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.drive(100);
console.log(myCar.getMileage()); 

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions(dimensions) {
        this.width = dimensions.width;
        this.height = dimensions.height;
    }
}

const myRectangle = new Rectangle(5, 10);
console.log(myRectangle.area); 

myRectangle.dimensions = { width: 7, height: 14 };
console.log(myRectangle.area); 



