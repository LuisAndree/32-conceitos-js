// Conversão Implícita
let x = "5" + 2;    // "52" (2 é convertido para string)
let y = "5" * 2;    // 10 (string é convertida para número)

console.log(x); // "52"
console.log(y); // 10

// Conversão Explícita
let a = Number("10"); // Converte string para número
let b = String(10);   // Converte número para string

console.log(a); // 10
console.log(b); // "10"

// Chamada de Métodos
let person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // "Hello, Alice"
