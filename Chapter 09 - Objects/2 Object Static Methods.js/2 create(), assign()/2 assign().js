// Object.assign()

// It copies all enumerable own properties from one or more source objects to a target object.
// It mutates the target object and returns it.

let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };

Object.assign(target, source);

console.log(target); // { a: 1, b: 4, c: 5 }
