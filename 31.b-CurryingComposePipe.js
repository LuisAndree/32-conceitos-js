// 1. Currying
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
const result = multiplyBy2And3(4);

console.log(result); 

const curriedMultiply = a => b => c => a * b * c;

console.log(curriedMultiply(2)(3)(4)); 

// 2. Compose
const compose = (...fns) => (value) =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const add1 = n => n + 1;
const multiplyBy2Compose = n => n * 2;
const square = n => n * n;

const composedFunction = compose(add1, multiplyBy2Compose, square);

console.log(composedFunction(3)); 

// 3. Pipe
const pipe = (...fns) => (value) =>
    fns.reduce((acc, fn) => fn(acc), value);

const pipedFunction = pipe(square, multiplyBy2Compose, add1);

console.log(pipedFunction(3)); 

const add = a => b => a + b;
const multiplyPipe = a => b => a * b;

const curriedPipe = pipe(
    add(5),
    multiplyPipe(2),
    square
);

console.log(curriedPipe(3)); 
