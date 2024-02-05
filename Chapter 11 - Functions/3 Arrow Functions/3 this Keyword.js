// this keyword in arrow functions

// The 'this' keyword refers to the object that is currently executing the code.

// Arrow functions do not have their own 'this' keyword, they inherit it from the parent scope.

const printThis = () => {
  console.log(this);
}

printThis(); // undefined

// ------------------------------------

// new printThis(); // ReferenceError: printThis can't be a constructor

// ------------------------------------

const person = {
  name: 'John',
  printThis: () => {
    console.log(this);
  },
};

person.printThis(); // undefined (inherits the global this)