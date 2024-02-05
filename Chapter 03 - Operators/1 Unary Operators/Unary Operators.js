/*

Unary Operators

  1 - Increment/Decrement Operators
  2 - Unary Plus, Unary Negation
  3 - Logical Operator !

*/

// ===========================================================================================

// 1 - Increment/Decrement Operators

// Increment ++ (by 1)
// Decrement -- (by 1)

let c = 9;

console.log(c++); // Postincrement operator: prints 9 then increments (c = 10)
console.log(++c); // Preincrement operator: increments (c = 11) then prints

console.log(c--); // Postdecrement operator: prints 11 then decrements (c = 10)
console.log(--c); // Predecrement operator: decrements (c = 9) then prints

// ===========================================================================================

// 2 - Unary Plus, Unary Negation

// Unary plus     +
// Unary Negation -

console.log(+100); // 100
console.log(+'100'); // 100
console.log(+'-100'); // -100
console.log(+'Ali'); // NaN
console.log(+true); // 1
console.log(+false); // 0

// NaN => Not a Number

// Notice
let a = '10';
let b = 20;
console.log(a + b); // 1020 (string) This is a concatenation
console.log(+a + b); // 30 (number)

// The unary negation simply converts its operand to a number and then changes the sign.

// ===========================================================================================

// 3 - Logical Operator !

// Assuming that p is a simple condition: ! Logical NOT "negation" (!p is false if p is true, and !p is true if p is false).
console.log(!true); // false
console.log(!false); // true
console.log(!20); // false
// More details later in this section..
