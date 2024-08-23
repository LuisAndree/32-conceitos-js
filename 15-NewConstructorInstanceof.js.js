class Vehicle {
    constructor(make, model) {
        this.make = make; 
        this.model = model; 
    }

    displayInfo() {
        console.log(`Vehicle Make: ${this.make}, Model: ${this.model}`);
    }
}

const vehicle1 = new Vehicle('Toyota', 'Corolla');
const vehicle2 = new Vehicle('Honda', 'Civic');

vehicle1.displayInfo(); 
vehicle2.displayInfo(); 

console.log(vehicle1 instanceof Vehicle); 
console.log(vehicle2 instanceof Vehicle); 

console.log(vehicle1 instanceof Object); 
console.log(vehicle1 instanceof Array);  
