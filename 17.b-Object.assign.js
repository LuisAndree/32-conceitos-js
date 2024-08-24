const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

const job = {
    title: 'Software Developer',
    company: 'Tech Corp'
};

const contactInfo = {
    email: 'john.doe@example.com',
    phone: '123-456-7890'
};

const employee = Object.assign({}, person, job, contactInfo);

console.log(employee);

employee.age = 31;
employee.company = 'New Tech Corp';

console.log(employee);

console.log(person.age);
console.log(job.company); 

const updatedPerson = Object.assign(person, { age: 32 });

console.log(updatedPerson);

console.log(person.age); 
