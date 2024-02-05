/*

Binary Operators
 
  1 - Arithmetic Operators
  2 - Assignment Operators
  3 - Equality Operators
  4 - Relational Operators
  5 - Logical Operators

*/

// ===========================================================================================

// 1 - Arithmetic Operators

// Addition       +
// Subtraction    -
// Multiplication *
// Division       /
// Remainder      %
// Exponetiation  **

console.log(30 + 20); // 50 (number)
console.log(30 - 20); // 10 (number)

console.log(30 + 'Ali'); // 30Ali (string) This is a concatenation
console.log(30 - 'Ali'); // NaN (number)
console.log(30 * 'Ali'); // NaN (number)

console.log(30 * 8); // 240 (number)
console.log(30 / 8); // 3.75 (number)
console.log(30 % 8); // 6 (number) The result of 30 / 8 is 24 and the remainder is 6
console.log(2 ** 3); // 8 (number) 2 * 2 * 2

// ===========================================================================================

// 2 - Assignment Operators

let d;
d = 10;
console.log(d); // 10

// The Assignment Operator (=)
// Assignment operators are used when assigning a value to a variable.
// The left-side operand of the assignment operator is a variable.
// The right-side operand of the assignment operator is a value.

d = d - 5; // d = 10 - 5
console.log(d); // 5

// The Compound Assignment Operators (+=   -=   *=   /=   %=   **=)

d += 5; // x = x + 5
console.log(d); // 10

d -= 5; // x = x - 5
console.log(d); // 5

d *= 2; // x = x * 2
console.log(d); // 10

d /= 2; // x = x / 2
console.log(d); // 5

d %= 3; // x = x % 3
console.log(d); // 2

d **= 3; // x = x ** 3
console.log(d); // 8

// ===========================================================================================

// 3 - Equality Operators

// ==   ===   !=   !==
// They evaluate to true or false

// (x == y)  is x equal to y? (compares values only)
// (x === y) is x identical to y? (compares values and types)

console.log(10 == 10); // true
console.log(10 == '10'); // true
console.log(10 === '10'); // false

// (x != y)  is x not equal to y? (compares values only)
// (x !== y) is x not identical to y? (compares values and types)

console.log(10 != 10); // false
console.log(10 != '10'); // false
console.log(10 !== '10'); // true

// ===========================================================================================

// 4 - Relational Operators

// <   <=   >   =>
// They all evaluate to true or false

// (x > y)  is x greater than y?
// (x < y)  is x less than y?
// (x >= y) is x greater than or equal to y?
// (x <= y) is x less than or equal to y?

let x = 4;
let y = 6;

console.log(x < y); // true
console.log(x + 2 < y); // false
console.log(x + 2 <= y); // true

// ===========================================================================================

// 5 - Logical Operators

/*

&&    ||

Assuming that x and y are two simple conditions

&& (Logical AND) (x && y) is true if both x and y are true, otherwise it's false.
|| (Logical OR) (x || y) is true if either x or y or both are true, otherwise it's false.

*/

console.log(10 == '10' && 10 > 5); // true (both are true)
console.log(10 == '10' && 10 < 5); // false (the second operand is false)

console.log(true || 10 > 5); // true (both are true)
console.log(10 == '10' || 10 < 5); // true (the first operand is true)
console.log(10 === '10' || 10 < 5); // false (both are false)

let age = 25;
let height = 175;

console.log(age > 30 && height > 165); // false
console.log(age > 30 || height > 165); // true

// Remember the unary logical operator ! (Logical NOT "negation")
// Logical negation requires only one condition

console.log(!false); // true
console.log(!20); // false (the zero (0) value is false, but any nonzero value is true)
console.log(!(15 > 10)); // false
console.log(!(10 === '10')); // true (this is similar to (10 !== '10))
