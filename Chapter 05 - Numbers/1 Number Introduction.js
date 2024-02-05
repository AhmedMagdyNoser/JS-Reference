// Number Introduction

// Number is a primitive data type that is used to represent numbers.

// ===========================================================================================

// Creating Numbers

// There are several ways to create numbers including:

// 1 - Using the number literal
let num1 = 100;

// 2 - Using the Number constructor (but this is not recommended)
let num2 = new Number(100);

// ===========================================================================================

// Immutability

// Number is immutable. You can't change a number's value. Instead, a new number is created and assigned to the variable.

num1 = 200;

// The value 200 is created in memory and assigned to the variable.
// The value 100 is garbage collected

// ===========================================================================================

// Representing Numbers

// All the following will log 1000000
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(1000000.0);

// convert Hexadecimal to decimal (we represent hexa using the format 0xXX where XX is the value)
console.log('The Hexa FF:', 0xff); // 255
console.log('The Hexa 0A:', 0x0a); // 10
