const fruits = ['apple', 'banana', 'orange', 'mango'];
console.log('Fruits:', fruits); 

console.log('First fruit:', fruits[0]); 

fruits.push('grape');
console.log('After push:', fruits); 

fruits.pop();
console.log('After pop:', fruits); 

fruits.forEach(fruit => console.log('Fruit:', fruit));

const person = {
    name: 'John Doe',
    age: 30,
    occupation: 'Developer'
};
console.log('Person:', person); 

console.log('Name:', person.name); 

person.country = 'USA';
console.log('After adding country:', person); 

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

const uniqueNumbers = new Set([1, 2, 3, 4, 4, 5]);
console.log('Unique Numbers:', uniqueNumbers); 

uniqueNumbers.add(6);
console.log('After add:', uniqueNumbers); 

console.log('Has 3:', uniqueNumbers.has(3)); 

uniqueNumbers.delete(2);
console.log('After delete:', uniqueNumbers); 

uniqueNumbers.forEach(value => console.log('Set value:', value));

const userRoles = new Map();
userRoles.set('admin', 'Administrator');
userRoles.set('editor', 'Content Editor');
userRoles.set('viewer', 'Read-only Viewer');
console.log('User Roles:', userRoles); 

console.log('Role of admin:', userRoles.get('admin')); 

console.log('Has editor role:', userRoles.has('editor')); 

userRoles.delete('viewer');
console.log('After delete viewer:', userRoles); 

userRoles.forEach((value, key) => console.log(`${key}: ${value}`));
