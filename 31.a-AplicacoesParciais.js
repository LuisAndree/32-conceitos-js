// Função simples para somar três números
function sum(x, y, z) {
    return x + y + z;
}

// Função para criar uma aplicação parcial
function partial(func, ...fixedArgs) {
    return function(...remainingArgs) {
        return func(...fixedArgs, ...remainingArgs);
    };
}

// Exemplo de aplicação parcial
const add5and10 = partial(sum, 5, 10);

console.log(add5and10(3));  // 18 (5 + 10 + 3)
console.log(add5and10(7));  // 22 (5 + 10 + 7)
console.log(add5and10(0));  // 15 (5 + 10 + 0)

function calculateVolume(length, width, height) {
    return length * width * height;
}

const calculateBoxVolume = partial(calculateVolume, 10, 5);

console.log(calculateBoxVolume(2));  // 100 (10 * 5 * 2)
console.log(calculateBoxVolume(10)); // 500 (10 * 5 * 10)
console.log(calculateBoxVolume(4));  // 200 (10 * 5 * 4)
