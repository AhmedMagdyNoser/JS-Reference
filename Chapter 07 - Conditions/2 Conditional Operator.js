// 1 - Conditional Operator (Ternary Operator)

// The ternary operator (condition ? exprIfTrue : exprIfFalse) is used as a shorthand for an if-else statement.

let male = true;
let age = 25;

// Checking without age
male ? console.log('Allowed') : console.log('Not Allowed');

// Checking with age
male
  ? age >= 18
    ? console.log('Allowed')
    : console.log('Not Allowed')
  : console.log('Not Allowed');

// Checking with age
male && age >= 18 ? console.log('Allowed') : console.log('Not Allowed');

// We can assign the result to a variable
let isAllowed = male && age >= 18 ? true : false;
console.log(isAllowed);

// ===========================================================================================

// 2 - The AND (&&) operator

// The logical AND (&&) operator is used to run the second operand only if the first operand is truthy.

let x = 10;

// Instead of doing that:
x > 5 ? console.log('x is greater than 5') : null;

// We can do that:
x > 5 && console.log('x is greater than 5');
