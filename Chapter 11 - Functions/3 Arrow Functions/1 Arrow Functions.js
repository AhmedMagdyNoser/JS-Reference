// Arrow Functions

// Arrow functions are a new way to write functions introduced in ES6.
// Arrow functions are always anonymous, they cannot have a name. They are usually assigned to a variable.

// Simple Example

let sayHello = () => {
  console.log('Hello!');
}

// or simply:
let sayHelloSimply = () => console.log('Hello!'); // this is called implicit return

sayHello(); // Hello!
sayHelloSimply(); // Hello!

// ===========================================================================================

// Example with Parameters

let sayHelloTo = (name) => {
  console.log(`Hello ${name}!`);
}

let sayHelloSimplyTo = name => console.log(`Hello ${name}!`);

sayHelloTo('John'); // Hello John!
sayHelloSimplyTo('John'); // Hello John!

// ===========================================================================================

// Example with Default Parameters

// if you call the function without parameters (undefined), it will use the default values.

let printSumWithDefaultParameters = (a = 0, b = 0) => {
  console.log(a + b);
}

let printSumWithDefaultParametersSimply = (a = 0, b = 0) => console.log(a + b);

printSumWithDefaultParameters(); // 0
printSumWithDefaultParametersSimply(); // 0

// ===========================================================================================

// Example with Return Statement

let sum = (a, b) => {
  return a + b;
}

// or simple can be:
let sumSimply = (a, b) => a + b;

console.log(sum(2, 3)); // 5
console.log(sumSimply(2, 3)); // 5

// ===========================================================================================

// Example with Nested functions

let outer = () => {
  let inner = () => {
    console.log('Hello from inner function!');
  }

  inner();
}

outer(); // Hello from inner function!