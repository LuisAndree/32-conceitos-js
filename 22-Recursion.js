function factorial(n) {
    if (n === 0) {
        return 1; 
    } else {
        return n * factorial(n - 1); 
    }
}

console.log('Fatorial de 5:', factorial(5)); 
console.log('Fatorial de 7:', factorial(7)); 

function fibonacci(n) {
    if (n === 0) {
        return 0; 
    } else if (n === 1) {
        return 1; 
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); 
    }
}

console.log('Fibonacci de 5:', fibonacci(5)); 
console.log('Fibonacci de 7:', fibonacci(7)); 

function sumArray(arr) {
    if (arr.length === 0) {
        return 0; 
    } else {
        return arr[0] + sumArray(arr.slice(1)); 
    }
}

const numbers = [1, 2, 3, 4, 5];
console.log('Soma dos elementos:', sumArray(numbers)); 

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1; 
    }
    
    const mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
        return mid; 
    } else if (arr[mid] > target) {
        return binarySearch(arr, target, low, mid - 1); 
    } else {
        return binarySearch(arr, target, mid + 1, high); 
    }
}

const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('Busca binária (encontrado):', binarySearch(sortedNumbers, 6)); 
console.log('Busca binária (não encontrado):', binarySearch(sortedNumbers, 10)); 
