function mapArray(arr, transformFn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(transformFn(arr[i]));
    }
    return result;
}

function double(x) {
    return x * 2;
}

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = mapArray(numbers, double);

console.log('Números dobrados:', doubledNumbers); 

function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
}

const doubleFn = createMultiplier(2);
const tripleFn = createMultiplier(3);

console.log('Dobro de 5:', doubleFn(5)); 
console.log('Triplo de 5:', tripleFn(5)); 

const numbers2 = [1, 2, 3, 4, 5];

const squaredNumbers = numbers2.map(x => x * x);
console.log('Números ao quadrado:', squaredNumbers); 

const evenNumbers = numbers2.filter(x => x % 2 === 0);
console.log('Números pares:', evenNumbers); 

const sum = numbers2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Soma dos números:', sum); 
