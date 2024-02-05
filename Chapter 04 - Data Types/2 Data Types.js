/*

Data Types in JavaScript

There are 2 types of data types in JavaScript:

1. Primitive Data Types (Value Types)
  boolean
  number
  string
  undefined
  null
  symbol
  bigint

2. Non-Primitive Data Types (Reference Types)
  object (object, array, function, ...)

Use the 'typeof' operator to get the data type of a value

*/

console.log(typeof true); // boolean
console.log(typeof false); // boolean

// ===============================

console.log(typeof 100); // number
console.log(typeof 8.65); // number
console.log(typeof Infinity); // number
console.log(typeof -Infinity); // number
console.log(typeof NaN); // number

// ===============================

console.log(typeof 'Ahmed'); // string
console.log(typeof ''); // string

// ===============================

console.log(typeof undefined); // undefined

// ===============================

console.log(typeof [10, 20, 30]); // object
console.log(typeof ['CS', 'IS', 'IT']); // object
console.log(typeof { name: 'Ali', age: 18 }); // object
console.log(typeof /regex/); // object
console.log(typeof null); // object

// ===============================

console.log(
  typeof function myFunction() {
    return 0;
  }
); // function (functions are objects, more details later)

console.log(
  typeof (() => {
    return 0;
  })
); // function

console.log(typeof (() => 0)); // function
