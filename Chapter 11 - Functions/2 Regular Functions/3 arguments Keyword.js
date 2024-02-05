// arguments

// It is an object accessible inside functions that contains the values of the arguments passed.
// It is only available inside regular functions.

function regularFunction(a, b) {
  console.log(arguments);
}

regularFunction(100, 200); // { '0': 100, '1': 200 }

// Note: It's better to use the rest parameter instead of the arguments object.
