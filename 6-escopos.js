// Escopo Global
var globalVar = "Eu sou uma variável global";

function globalScopeExample() {
    // Escopo de Função
    var functionVar = "Eu sou uma variável de função";

    console.log(globalVar); // Acessa a variável global

    // Bloco condicional, exemplo de escopo de bloco
    if (true) {
        let blockVar = "Eu sou uma variável de bloco";
        const blockConst = "Eu também sou uma constante de bloco";

        console.log(blockVar); // Acessa a variável de bloco
        console.log(blockConst); // Acessa a constante de bloco
    }

    // Tentar acessar blockVar e blockConst fora do bloco causará um erro
    // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
    // console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined
}

globalScopeExample();

console.log(globalVar); // Acessa a variável global
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined

// Escopo Léxico
function outerFunction() {
    const outerVar = "Eu sou uma variável da função externa";

    function innerFunction() {
        console.log(outerVar); // Acessa a variável da função externa (escopo léxico)
    }

    innerFunction();
}

outerFunction();
