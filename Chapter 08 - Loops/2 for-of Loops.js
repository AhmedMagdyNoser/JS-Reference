// for-of Loops

/*

for-of Loop Syntax:

It loops through the values of an iterable object (Array, String, Map, Set, etc.)

for (variable of iterable) {
  code block to be executed
}

*/

// ===========================================================================================

// Simple Example:

// The for-of loop below loops through the numbers 1 to 5.

for (let element of [1, 2, 3, 4, 5]) {
  console.log(element);
}

// ===========================================================================================

// Example to print all characters in a String:

let str = 'Hello!';

for (let char of str) {
  console.log(char);
}

// ===========================================================================================

// Example to print all elements in an Array:

let arr = ['A', 'B', 'C', 'D', 'E'];

for (let element of arr) {
  console.log(element);
}

// ===========================================================================================

// Example to filter an Array:

let mixedArray = [1, 2, 3, 'A', 'B', 'C', 4, 5, 'D', 'E'];

for (let element of mixedArray) {
  if (typeof element === 'number') console.log(element);
}
