// Tipo de Valor
let value1 = 10;
let value2 = value1;
value2 = 20;

console.log(value1); // 10 (o valor original não é alterado)
console.log(value2); // 20

// Tipo de Referência
let obj1 = { name: "Alice" };
let obj2 = obj1;
obj2.name = "Bob";

console.log(obj1.name); // "Bob" (o valor original foi alterado)
console.log(obj2.name); // "Bob"
