// Design Patterns: Module e Prototype

// 1. Module Pattern
// O padrão de módulo encapsula o código em um escopo independente, mantendo variáveis e funções privadas e expondo apenas o que é necessário.
const CounterModule = (function() {
    // Variável privada
    let count = 0;

    // Métodos privados
    function logCount() {
        console.log(`Count is: ${count}`);
    }

    // Métodos públicos (expostos)
    return {
        increment: function() {
            count++;
            logCount();
        },
        decrement: function() {
            count--;
            logCount();
        },
        reset: function() {
            count = 0;
            logCount();
        },
        getCount: function() {
            return count;
        }
    };
})();

// Usando o Module Pattern
CounterModule.increment(); 
CounterModule.increment(); 
CounterModule.decrement(); 
console.log(`Current count: ${CounterModule.getCount()}`); 
CounterModule.reset(); 

// 2. Prototype Pattern
// O padrão de protótipo usa o protótipo de um objeto para definir métodos que são compartilhados entre todas as instâncias de um determinado tipo.

// Criando uma função construtora para um objeto "Person"
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adicionando métodos ao protótipo de "Person"
Person.prototype.greet = function() {
    console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.age} anos.`);
};

Person.prototype.haveBirthday = function() {
    this.age++;
    console.log(`Feliz aniversário, ${this.name}! Agora você tem ${this.age} anos.`);
};

// Criando instâncias de "Person"
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Usando os métodos do protótipo
person1.greet(); 
person2.greet(); 

person1.haveBirthday(); 
person2.haveBirthday(); 
