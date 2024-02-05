// Immediately Invoked Function Expression (IIFE)

// IIFE is a function that runs as soon as it is defined.
// You can invoke the function by adding () to the end of the expression.
// You cannot access the IIFE from outside its scope. So you don't need to name it.

// ---------------------------------------------

(function () {
  console.log('Hello!');
})(); // Hello!

(function (name) {
  console.log(`Hello ${name}!`);
})('John'); // Hello John!

(() => {
  console.log('Hello!');
})(); // Hello!

((name) => {
  console.log(`Hello ${name}!`);
})('John'); // Hello John!

// ---------------------------------------------

let result1 = (function () {
  return 'Hello!';
})();

let result2 = (() => {
  return 'Hello!';
})();

console.log(result1); // Hello!
console.log(result2); // Hello!
