// 1. Expensive Operation (Operação Custosa)
// Uma operação é considerada "custosa" quando exige muitos recursos do sistema (tempo de processamento, memória, etc.).
// Vamos considerar uma operação que calcula o n-ésimo número de Fibonacci de forma recursiva, que é um exemplo de operação custosa.

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci(10):", fibonacci(10)); 

// 2. Big O Notation (Notação Big O)
// Big O Notation é usada para descrever a complexidade de um algoritmo, especialmente seu pior caso.
// A complexidade indica o quão rápido o tempo de execução de um algoritmo aumenta à medida que a entrada cresce.

// Exemplo de diferentes complexidades usando Big O Notation

// O(1) - Tempo constante: O tempo de execução não aumenta conforme o tamanho da entrada.
function constantTimeOperation(arr) {
    return arr[0]; // Sempre retorna o primeiro elemento, independentemente do tamanho do array.
}
console.log("Constant Time Operation:", constantTimeOperation([1, 2, 3, 4, 5])); // 1

// O(n) - Tempo linear: O tempo de execução aumenta linearmente com o tamanho da entrada.
function linearTimeOperation(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Linear Time Operation:", linearTimeOperation([1, 2, 3, 4, 5])); // 15

// O(n^2) - Tempo quadrático: O tempo de execução aumenta exponencialmente com o tamanho da entrada.
function quadraticTimeOperation(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    return pairs;
}
console.log("Quadratic Time Operation:", quadraticTimeOperation([1, 2, 3])); // Array de pares

// O(2^n) - Tempo exponencial: O tempo de execução dobra a cada aumento unitário na entrada.
// Exemplo: O cálculo de Fibonacci que fizemos acima é O(2^n) devido à sua recursão excessiva.

// 3. Comparando diferentes operações e suas complexidades
// Vamos comparar a performance de diferentes operações para n = 10.
console.time("Constant Time");
constantTimeOperation(new Array(10).fill(0));
console.timeEnd("Constant Time");

console.time("Linear Time");
linearTimeOperation(new Array(10).fill(0));
console.timeEnd("Linear Time");

console.time("Quadratic Time");
quadraticTimeOperation(new Array(10).fill(0));
console.timeEnd("Quadratic Time");

console.time("Exponential Time");
fibonacci(10); // Cálculo de Fibonacci é O(2^n)
console.timeEnd("Exponential Time");
