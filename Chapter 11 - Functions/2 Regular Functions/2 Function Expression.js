// Function Expression (Regular Function)

// It's a function that is assigned to a variable.

const sayHello = function () { // No need for a function name. (Anonymous Function)
  console.log('Hello!');
};

sayHello(); // Hello!

// ===========================================================================================

// Function Expression is the same as Function Declaration, but there are some differences:
// 1 - Function Expressions are not hoisted as they are stored in variables. (Recap: Hoisting)
// 2 - Function Expressions can be anonymous (without name).