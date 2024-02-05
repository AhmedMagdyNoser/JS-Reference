// the sort() sorts an array and returns a reference to the same array.

// To sort the array alphabetically.

let A = ['Ahmed', 'Magdy', 'Ibrahim'];
A.sort(); // ['Ahmed', 'Ibrahim', 'Magdy']

let B = [10, 4, 31];
B.sort(); // [10, 31, 4] // This is WRONG! This is alphabetical sorting.

// the sort() method takes a callback function that takes two parameters (a, b);

// To sort the array numerically.
let C = [10, 4, 31];

C.sort((a, b) => a - b); // [4, 10, 31]
// This means that: If a - b is negative, a will be before b.
