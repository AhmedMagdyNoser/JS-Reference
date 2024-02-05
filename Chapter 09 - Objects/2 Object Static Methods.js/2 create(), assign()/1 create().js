// Object.create()

// It creates a new object with the specified prototype object and properties.

// It takes two arguments:
//   1. The prototype object. (the parent object)
//   2. The properties of your new object.

let obj = Object.create({}, { name: { value: 'Ali' } });

console.log(obj); // { name: 'Ali' }
console.log(obj.__proto__); // The parent is the {} object
console.log(obj.__proto__.__proto__); // The parent of the parent is Object.prototype
