// Spread Operator

// The spread operator (...) expands an iterable into more elements.
// Iterable: An object that can be iterated over (they are arrays, strings, maps, sets, etc.)

// With strings:
console.log('Ahmed'); // Ahmed
console.log(...'Ahmed'); // A h m e d
console.log([...'Ahmed']); // [ 'A', 'h', 'm', 'e', 'd' ]

// With objects:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 }; // {a: 1, b: 2, c: 3, d: 4}

// With arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const spreadedArr = [...arr1, ...arr2]; // [ 1, 2, 3, 4, 5, 6 ]
const nestedArr = [arr1, arr2]; // [ [1, 2, 3], [4, 5, 6] ]
