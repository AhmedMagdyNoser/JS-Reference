// arguments Object

// It is an object accessible inside functions that contains the values of the arguments passed.
// It is not available inside arrow functions. so it inherits it from the parent scope.

const arrowFunction = (a, b) => {
  console.log(arguments);
};

arrowFunction(100, 200); // ReferenceError: arguments is not defined

// ------------------------------------

function regularFunction(a, b) {
  const arrowFunction = () => {
    console.log(arguments); // inherits the arguments object from the parent scope
  };
  arrowFunction();
}

regularFunction(100, 200); // { '0': 100, '1': 200 }

// ------------------------------------

// Note: It's better to use the rest operator instead of the arguments object.
