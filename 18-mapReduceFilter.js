const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Usando map para criar um novo array com os valores ao quadrado
const squares = numbers.map(num => num * num);
console.log('Squares:', squares);

// 2. Usando filter para criar um novo array com números pares
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even Numbers:', evenNumbers);

// 3. Usando reduce para somar todos os números do array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Sum:', sum);

// Outro exemplo de reduce: Encontrar o produto de todos os números
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log('Product:', product);

// Combinando os métodos map, filter e reduce:

const greaterThanFive = numbers.filter(num => num > 5);

const doubledValues = greaterThanFive.map(num => num * 2);

const doubledSum = doubledValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log('Sum of Doubled Values Greater Than Five:', doubledSum);
