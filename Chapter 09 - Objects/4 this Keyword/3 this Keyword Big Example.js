// this Keyword

// The 'this' keyword refers to the object that is currently executing the code.

// It allows you to access properties and methods of the object within its own context.

// Function declarations and function expressions have their own 'this' keyword.

// Arrow functions do not have their own 'this' keyword, they inherit it from the parent scope.

const bigObj = {
  x: 10,
  method: function () {
    console.log(this, 'from method'); // this here refers to the bigObj object
    return () => {
      console.log(this, 'from nested arrow function'); // this here refers to the bigObj object (inherited from parent)
      return function () {
        console.log(this, 'from nested regular function'); // this here refers to the global object
      };
    };
  },
};

bigObj.method()()();

// output:
// { x: 10, method: [Function: method] } from method
// { x: 10, method: [Function: method] } from nested arrow function
// undefined from nested regular function

// ------------------------------

// Notice the difference:

const newBigObj = {
  x: 10,
  method: () => {
    // Now this is an arrow function
    console.log(this, 'from method'); // this here refers to the global object (inherited from parent)
    return () => {
      console.log(this, 'from nested arrow function'); // this here refers to the global object (inherited from parent)
      return function () {
        console.log(this, 'from nested regular function'); // this here refers to the global object
      };
    };
  },
};

newBigObj.method()()();

// output:
// undefined from method
// undefined from nested arrow function
// undefined from nested regular function
