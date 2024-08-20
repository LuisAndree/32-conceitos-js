(function() {
    let privateVar = "Eu sou privada";

    function privateFunction() {
        console.log(privateVar);
    }

    privateFunction(); // "Eu sou privada"
})();

// Aqui fora, não temos acesso a 'privateVar' ou 'privateFunction'
console.log(typeof privateVar); // undefined

// Definindo um namespace
var MyApp = MyApp || {};

MyApp.utils = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    }
};

// Usando funções dentro do namespace
console.log(MyApp.utils.add(5, 3)); // 8
console.log(MyApp.utils.subtract(5, 3)); // 2

var MyApp = MyApp || {};

MyApp.module1 = (function() {
    // Variáveis e funções privadas
    let privateVar = "Segredo";

    function privateFunction() {
        return "Acesso restrito";
    }

    // API pública
    return {
        publicFunction: function() {
            return "Público: " + privateFunction();
        }
    };
})();

console.log(MyApp.module1.publicFunction()); // "Público: Acesso restrito"
console.log(typeof MyApp.module1.privateFunction); // undefined
