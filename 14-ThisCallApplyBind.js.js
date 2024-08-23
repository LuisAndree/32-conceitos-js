// Exemplo 1: Conceito de "this"
console.log("Exemplo 1: Conceito de 'this'");

const person = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.greet(); 

const greetFunction = person.greet;
greetFunction();

// Exemplo 2: Usando "call"
console.log("\nExemplo 2: Usando 'call'");

const person2 = {
    name: "Bob"
};

greetFunction.call(person2); 

// Exemplo 3: Usando "apply"
console.log("\nExemplo 3: Usando 'apply'");

function introduce(language, country) {
    console.log(`Hello, my name is ${this.name}. I speak ${language} and I am from ${country}.`);
}

const person3 = {
    name: "Charlie"
};

introduce.apply(person3, ["English", "USA"]); 

// Exemplo 4: Usando "bind"
console.log("\nExemplo 4: Usando 'bind'");

const person4 = {
    name: "David"
};

const boundGreet = person.greet.bind(person4);
boundGreet(); 

const boundIntroduce = introduce.bind(person4, "Spanish", "Spain");
boundIntroduce(); 
