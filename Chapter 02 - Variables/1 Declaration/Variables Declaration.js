// Variables Declaration

/*

A JavaScript variables (identifier) usually starts with a letter, underscore (_), or dollar sign ($).

It's not allowed to:
- begin with a digit.
- use special characters in names (except the underscore (_), and the dollar sign ($)).
- use keywords as identifiers.

Some examples of illegal names are ahmed(magdy) and ahmed*magdy.
Some examples of legal names are Number_hits, temp99, $credit, and _name.

By convention, JavaScript variable names are written in camelCase.
Variables should be given descriptive names that indicate their content and usage.

======================================================

Declaring variables

JavaScript has three kinds of variable declarations: var, let and const.

var declarations are globally scoped or function scoped,
while let and const declarations are block scoped.

const only prevents re-assignments.

*/

var x = 10;
let y = x + 5;
const Z = 30; // uppercased

// but const doesn't prevent mutations.
// The properties of objects assigned to constants are not protected, so the following statement is executed normally.

const MY_OBJECT = { key: 'value' };
MY_OBJECT.key = 'otherValue'; // This is allowed and mutates the object

const myArray = [1, 2, 3];
myArray.push(4); // This is allowed and mutates the array
