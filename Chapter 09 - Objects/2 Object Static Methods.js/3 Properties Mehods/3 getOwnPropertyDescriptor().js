// getOwnPropertyDescriptor() and getOwnPropertyDescriptors() methods

// Object.getOwnPropertyDescriptor()  => returns an object describing the configuration of a specific property on an object.
// Object.getOwnPropertyDescriptors() => returns all own property descriptors of a given object.

let myObj = {
  name: 'Ali',
  age: 30,
};

console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); // { value: 'Ali', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(myObj)); // { name: { value: 'Ali', writable: true, enumerable: true, configurable: true }, age: { value: 30, writable: true, enumerable: true, configurable: true } }
