// Closure

// A closure is a function having access to the parent scope, even after the parent function has closed.
// This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

// ------------------------------------------------------------

function init() {
  let name = 'Mozilla';

  // an inner function, a closure
  function displayName() {
    console.log(name); // use variable declared in the parent function
  }

  displayName();
}

init();

// ------------------------------------------------------------

function makeFunc() {
  let name = 'Mozilla';

  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
// Garbage collection will not clear the variable name as it is still being referenced by the inner function displayName().

myFunc();

// The closure is often concerned with impure higher-order functions, which return a function.
