let undefinedVar = undefined; // Tipo: undefined
let nullVar = null;           // Tipo: object (null é tecnicamente um objeto)
let booleanVar = true;        // Tipo: boolean
let numberVar = 42;           // Tipo: number
let stringVar = "Hello";      // Tipo: string
let bigintVar = 123n;         // Tipo: bigint
let symbolVar = Symbol();     // Tipo: symbol

console.log(typeof undefinedVar); // "undefined"
console.log(typeof nullVar);      // "object"
console.log(typeof booleanVar);   // "boolean"
console.log(typeof numberVar);    // "number"
console.log(typeof stringVar);    // "string"
console.log(typeof bigintVar);    // "bigint"
console.log(typeof symbolVar);    // "symbol"
