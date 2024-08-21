let a = 5;  // 0101 em binário
let b = 3;  // 0011 em binário

let result = a & b;  // 0001 em binário, que é 1 em decimal

console.log(result); // 1

let a2 = 5;  // 0101 em binário
let b2 = 3;  // 0011 em binário

let result2 = a2 | b2;  // 0111 em binário, que é 7 em decimal

console.log(result2); // 7

let a3 = 5;  // 0101 em binário
let b3 = 3;  // 0011 em binário

let result3 = a3 ^ b3;  // 0110 em binário, que é 6 em decimal

console.log(result3); // 6

let a4 = 5;  // 0101 em binário

let result4 = ~a4;  // 1010 em binário, que é -6 em decimal

console.log(result4); // -6

let a5 = 5;  // 0101 em binário

let result5 = a5 << 1;  // 1010 em binário, que é 10 em decimal

console.log(result5); // 10

let a6 = -5;  // 11111111111111111111111111111011 em binário (32 bits)

let result6 = a6 >>> 1;  // 01111111111111111111111111111101 em binário, que é 2147483645 em decimal

console.log(result6); // 2147483645
