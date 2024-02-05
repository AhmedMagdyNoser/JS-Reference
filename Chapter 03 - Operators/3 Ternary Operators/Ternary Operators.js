/*

Ternary Operator

? :

It is also called the Conditional Operator.
It is the only JavaScript operator that takes three operands.
It is used in conditions so we will talk about it in more detail later.

Syntax: condition ? expr1 : expr2

*/

let myAge = 15;

myAge >= 18 ? console.log('Allowed') : console.log('Not allowed');

// if myAge is greater than or equal 18, 'Allowed' will be printed, otherwise 'Not allowed' will be printed.

// -------------------------------

// we can assign the result to a variable

let result = myAge >= 18 ? 'Allowed' : 'Not allowed';

console.log(result); // Not allowed