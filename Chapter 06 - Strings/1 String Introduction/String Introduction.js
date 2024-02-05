// String Introduction

// String is a primitive value that represents a sequence of characters.

// ===========================================================================================

// Creating Strings

// There are several ways to create strings including:

// 1 - Using the string literal
let str1 = 'Ahmed';

// 2 - Using the String constructor (but this is not recommended)
let str2 = new String('Ahmed');

// ===========================================================================================

// Immutability

// String is immutable. You can't change a string's value. Instead, a new string is created and assigned to the variable.

str1 = 'Mazen';

// The value 'Mazen' is created in memory and assigned to the variable.
// The value 'Ahmed' is garbage collected

// https://www.geeksforgeeks.org/how-are-strings-stored-in-javascript

// ===========================================================================================

// To get a character at a specific index, use the square brackets notation.
console.log(str1[0]);
console.log(str1[1]);
console.log(str1[4]);

// To get the length of a string, use the length property.
console.log(str1.length); // 5
