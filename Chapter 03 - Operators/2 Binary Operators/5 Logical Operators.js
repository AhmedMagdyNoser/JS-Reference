// Logical Operators

/*

Intro:
- Falsy values are: false, 0, '', null, undefined, NaN, -0, 0n, and document.all. Other values are truthy.
- Logical operators are typically used with boolean (logical) values, but they can also be used with non-boolean values.

*/

// Logical AND (&&) operator

console.log(10 == '10' && 10 > 5); // true (both are true)
console.log(10 == '10' && 10 < 5); // false (the second operand is false)

// Notice the following:

console.log(10 > 5 && 'Hello'); // Hello
console.log(5 > 10 && 'Hello'); // false
console.log('Hello' && 10 > 5); // true
console.log('' && 'foo'); // ""
console.log(2 && 0); // 0
console.log('foo' && 4); // 4
console.log(10 > 5 && 'Hello' && 'World'); // World
console.log(true && null && 'Hello' && 'World'); // null

/*
 
Generally:
- The logical AND (&&) evaluates operands from left to right,
- Returning immediately the value of the first falsy operand it encounters;
- If all values are truthy, the value of the last operand is returned.

*/

// ===========================================================================================

// Logical OR (||) operator

console.log(true || 10 > 5); // true (both are true)
console.log(10 == '10' || 10 < 5); // true (the first operand is true)
console.log(10 === '10' || 10 < 5); // false (both are false)

// Notice the following:

console.log(10 > 5 || 'Hello'); // true
console.log(5 > 10 || 'Hello'); // Hello
console.log('Hello' || 10 > 5); // Hello
console.log(false || 3 === 4); // false
console.log('Cat' || 'Dog'); // Cat
console.log(false || 'Cat'); // Cat
console.log('Cat' || false); // Cat
console.log('' || false); // false
console.log(false || ''); // ""
console.log(false || {} || ''); // {}

/*

Generally:
- The logical OR (||) evaluates operands from left to right,
- Returning immediately the value of the first truthy operand it encounters;
- If all values are falsy, the value of the last operand is returned.

*/

// ===========================================================================================

// Nullish coalescing operator (??)

// It returns its right-hand side operand when its left-hand side operand is null or undefined,
// and otherwise returns its left-hand side operand.

console.log(null ?? 'default string'); // default string
console.log(0 ?? 42); // 0

// It can be seen as a special case of the logical OR (||) operator.

// ===========================================================================================

// Logical NOT (!) operator - This is a unary operator
// Logical negation requires only one condition

console.log(!false); // true
console.log(!20); // false (the zero (0) value is false, but any nonzero value is true)
console.log(!(15 > 10)); // false
console.log(!(10 === '10')); // true (this is similar to (10 !== '10))
