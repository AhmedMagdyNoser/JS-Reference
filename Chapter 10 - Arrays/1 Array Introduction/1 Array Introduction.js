// Array Introduction

// Arrays are objects that enables storing a collection of multiple items under a single variable name.

// An array is an object with some special behaviors.

let arr1 = ['a', 'b', 'c'];

// It's the same as:

let arr2 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };

// But, of course, it's recommended to use the array literal syntax as it provides many useful methods from the Array.prototype object.

/*

Since arrays are objects:
  - They are mutable.
  - They are reference types.

*/

// ===========================================================================================

// To get an item at a specific index, use the square brackets notation.
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);

// To get the length of an array, use the length property.
console.log(arr1.length);

// ===========================================================================================

// Nested Arrays

let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
];

console.log(nestedArray);

// it's also called a multidimensional array
