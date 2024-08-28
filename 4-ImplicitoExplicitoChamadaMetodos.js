// Conversão Implícita
let x = "5" + 2;    
let y = "5" * 2;    

console.log(x); 
console.log(y); 

// Conversão Explícita
let a = Number("10"); // Converte string para número
let b = String(10);   // Converte número para string

console.log(a); 
console.log(b); 

// Chamada de Métodos
let person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); 
