// this keyword in regular functions

// The 'this' keyword refers to the object that is currently executing the code.

// Regular functions have their own 'this' keyword.

function printThis() {
  console.log(this);
}

printThis(); // undefined

// ------------------------------------

new printThis(); // printThis {} (empty object)

// The 'new' keyword does the following:
// 1 - Creates a new empty object and assigns it to 'this'.
// 2 - The 'this' (the new object) is returned by default.

// ------------------------------------

const person = {
  name: 'John',
  printThis: function () {
    console.log(this);
  },
};

person.printThis(); // person
