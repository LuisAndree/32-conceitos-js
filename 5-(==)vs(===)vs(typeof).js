console.log(5 == "5");    // true (string "5" é convertida para número 5)
console.log(true == 1);   // true (true é convertido para número 1)
console.log(false == 0);  // true (false é convertido para número 0)
console.log(null == undefined); // true (são considerados iguais)
console.log('' == 0);     // true (string vazia é convertida para número 0)

console.log(5 === "5");   // false (tipos diferentes: número vs string)
console.log(true === 1);  // false (tipos diferentes: booleano vs número)
console.log(false === 0); // false (tipos diferentes: booleano vs número)
console.log(null === undefined); // false (tipos diferentes: null vs undefined)
console.log('' === 0);    // false (tipos diferentes: string vs número)
console.log(5 === 5);     // true (mesmo tipo e valor)

console.log(typeof 42);            // "number"
console.log(typeof "Hello");       // "string"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" (null é um caso especial em JavaScript)
console.log(typeof { name: "Alice" }); // "object"
console.log(typeof function() {}); // "function"
console.log(typeof [1, 2, 3]);     // "object" (arrays são objetos)

let a = "5";
let b = 5;

console.log(a == b);    // true (a string "5" é convertida para número 5)
console.log(a === b);   // false (tipos diferentes: string vs número)
console.log(typeof a);  // "string"
console.log(typeof b);  // "number"
