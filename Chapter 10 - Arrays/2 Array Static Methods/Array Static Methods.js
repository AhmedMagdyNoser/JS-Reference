// Array Object Static Methods

// ===========================================================================================

// Array.isArray()

// The Array.isArray() method determines whether the passed value is an Array
let A1 = [1, 2, 3];
console.log(Array.isArray(A1)); // true
console.log(Array.isArray('Hello')); // false

// ===========================================================================================

// Array.of()

// The Array.of() method creates an array from its arguments
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of('Hello')); // ['Hello']
console.log(Array.of()); // []

// ===========================================================================================

// Array.from()

// The Array.from() method creates an array from an array-like object
console.log(Array.from([1, 2, 3])); // [1, 2, 3]
console.log(Array.from([1, 2, 3], (value) => value * 2)); // [2, 4, 6]

console.log(Array.from('Hello')); // ['H', 'e', 'l', 'l', 'o']
console.log(Array.from('12345')); // ['1', '2', '3', '4', '5']
console.log(Array.from('12345', (value) => +value * 2)); // [2, 4, 6, 8, 10]

console.log(Array.from({ length: 5 })); // [undefined, undefined, undefined, undefined, undefined]
console.log(Array.from({ length: 5 }, () => 1)); // [1, 1, 1, 1, 1]
console.log(Array.from({ length: 5 }, (value) => value)); // [undefined, undefined, undefined, undefined, undefined]
console.log(Array.from({ length: 5 }, (value, index, array) => index)); // [0, 1, 2, 3, 4]
console.log(Array.from({ length: 5 }, (value, index, array) => index + 1)); // [1, 2, 3, 4, 5]
