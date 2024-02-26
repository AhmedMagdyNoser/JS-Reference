// Object Creation

// There are several ways to create objects including:

// 1. Object literal
let obj1 = { name: 'Ali' };

// 2. Object constructor (but this is not recommended)
let obj2 = new Object({ name: 'Ali' });

// ===========================================================================================

// Concise Object Literal Syntax:

// In ES6, if the property name and the variable name are the same, we can use the concise object literal syntax.

let name = 'Ali';
let age = 25;

let obj3 = { name, age }; // same as { name: name, age: age }
