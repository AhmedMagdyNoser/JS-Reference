// Function Declaration (Regular Function)

// Simple Example

function sayHello() {
  console.log('Hello!');
}

sayHello(); // Hello!

// ===========================================================================================

// Example with Parameters

function sayHelloTo(name) {
  console.log(`Hello ${name}!`);
}

sayHelloTo('John'); // Hello John!

// ===========================================================================================

// Example with Default Parameters

// If you call the function without parameters (undefined), it will use the default values.

function printSumWithDefaultParameters(a = 0, b = 0) {
  console.log(a + b);
}

printSumWithDefaultParameters(); // 0

// (The default value is only used if the argument is missing or if you pass undefined explicitly.)

// ===========================================================================================

// Example with Return Statement

// The return statement stops the execution of a function and returns a value from that function.

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 3)); // 5

// ===========================================================================================

// Example with Nested functions

function outer() {
  function inner() {
    console.log('Hello from inner function!');
  }

  inner();
}

outer(); // Hello from inner function!
