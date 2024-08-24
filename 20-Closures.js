// 1. Função externa que cria um escopo de fechamento (closure)
function createCounter() {
    let count = 0; // Variável privada

    // 2. Função interna que tem acesso à variável `count`
    return function() {
        count++; 
        return count;
    };
}

// 3. Criação de uma instância do contador
const counter = createCounter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

// 4. Outra instância do contador, com um novo escopo
const anotherCounter = createCounter();

console.log(anotherCounter()); 
console.log(anotherCounter()); 

// 5. Closure mais complexa: função que cria uma função de saudação personalizada
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting('Hello');
const sayHi = createGreeting('Hi');

console.log(sayHello('Alice')); 
console.log(sayHi('Bob')); 
