// Object.getOwnPropertyNames()

// returns an array of all properties (including non-enumerable properties) found directly in a given object.

let myObj = {};

Object.defineProperties(myObj, {
  name: {
    value: 'Ali',
    enumerable: true,
  },
  age: {
    value: 30,
    enumerable: false,
  },
});

console.log(Object.getOwnPropertyNames(myObj)); // [ 'name', 'age', 'height', 'weight' ]
console.log(Object.keys(myObj)); // [ 'name', 'height' ] only because (enumerable: false)
