function createCounter() {
    let count = 0; // Variável privada

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();
console.log(counter1.getCount()); // Output: 2

counter1.decrement();
console.log(counter1.getCount()); // Output: 1
