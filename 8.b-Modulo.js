// math.js
const add = (a, b) => a + b;
module.exports = { add };

// main.js
const { add } = require('./math');
console.log(add(2, 3)); // 5
