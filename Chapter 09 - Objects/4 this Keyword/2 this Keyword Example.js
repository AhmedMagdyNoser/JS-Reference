// this Keyword

// The 'this' keyword refers to the object that is currently executing the code.

// It allows you to access properties and methods of the object within its own context.

const person = {
  name: 'John',
  printThis: function () {
    console.log(this);
  },
};

person.printThis(); // person

// ------------------------------

const newPrintThis = person.printThis;

newPrintThis(); // undefined (the global this) because the function is not called on the person object

// ------------------------------

const newObj = { newProp: 'Hello' };

newObj.newMethod = person.printThis;

newObj.newMethod(); // newObj
