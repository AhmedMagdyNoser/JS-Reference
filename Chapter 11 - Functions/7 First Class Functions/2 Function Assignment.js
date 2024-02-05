// 1. A function can be assigned as a value to a variable.

function sayHello() {
  console.log('Hello!');
}

const greet = sayHello;

greet(); // Hello!

// ---------------------------------------------------------

// Function expression is a function that is assigned to a variable.

let sayHi = function () {
  console.log('Hi!')
}

sayHi(); // Hi!

// ---------------------------------------------------------

let log = console.log;

log('Hello!'); // Hello!
