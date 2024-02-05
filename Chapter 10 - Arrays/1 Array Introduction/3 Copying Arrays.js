// Copying Arrays

// There are many ways to copy an array, but the most common way is to use the spread operator (...)

let A1 = [1, 2, 3];

// ---------------------------------------------------------

// Wrong way to copy an array

let A2 = A1; // A2 is a reference to the A1 array

// But if you change in the A1 array, the A2 array will be changed too:

A1[0] = 10;

console.log(A1); // [10, 2, 3]
console.log(A2); // [10, 2, 3]

// This is because arrays are reference types

// ---------------------------------------------------------

// To solve this problem, you can use one of the following methods:

A2 = [...A1]; // or
A2 = A1.concat(); // or
A2 = A1.slice(); // or
A2 = Array.from(A1);

// But in case of nested arrays, the nested arrays will be copied by reference, not by value

A1 = [1, 2, 3, [4, 5, 6]];

A2 = [...A1]; // or A2 = A1.concat() or A2 = A1.slice() or A2 = Array.from(A1);

A1[3][0] = 10;

console.log(A1); // [1, 2, 3, [10, 5, 6]]
console.log(A2); // [1, 2, 3, [10, 5, 6]]

// ---------------------------------------------------------

// To solve all these problems, you can use JSON.parse() and JSON.stringify() methods

A1 = [1, 2, 3, [4, 5, 6]];

A2 = JSON.parse(JSON.stringify(A1));

A1[3][0] = 10;

console.log(A1); // [1, 2, 3, [10, 5, 6]]
console.log(A2); // [1, 2, 3, [4, 5, 6]]
