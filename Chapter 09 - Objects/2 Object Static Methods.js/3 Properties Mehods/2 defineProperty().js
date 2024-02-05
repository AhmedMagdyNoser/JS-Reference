// Object.defineProperty() and Object.defineProperties() methods

// 1 Object.defineProperty() defines or modifies a property directly on an object, and returns the object.

let myObj = {
  name: 'Ali',
};

Object.defineProperty(myObj, 'age', {
  value: 30,
  writable: false, // true => can be changed, false => can't be changed
  enumerable: false, // true => can be looped over, false => can't be looped over
  configurable: false, // true => can be deleted, false => can't be deleted (using delete keyword)
});

console.log(myObj); // { name: 'Ali', age: 30 }

// Examples:
// myObj.age = 40; // TypeError: Cannot assign to read only property 'age' of object (writable: false)
// console.log(Object.entries(myObj)); // [ [ 'name', 'Ali' ] ] only because (enumerable: false)
// delete myObj.age; // TypeError: Cannot delete property 'age' of #<Object> (configurable: false)

// ===========================================================================================

// 2 Object.defineProperties() defines or modifies multiple properties directly on an object, and returns the object.

Object.defineProperties(myObj, {
  height: {
    value: 180,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  weight: {
    value: 80, // By default, all attributes of a property defined using defineProperty() or defineProperties() are false. But all attributes of a property defined in the object literal are true.
  },
});

console.log(myObj); // { name: 'Ali', age: 30, height: 180, weight: 80 }

// ====================================================================================

// Object.getOwnPropertyDescriptor()  => returns an object describing the configuration of a specific property on an object.
// Object.getOwnPropertyDescriptors() => returns all own property descriptors of a given object.

console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); // { value: 'Ali', writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptors(myObj)); // { name: { value: 'Ali', writable: true, enumerable: true, configurable: true }, age: { value: 30, writable: false, enumerable: false, configurable: false }, height: { value: 180, writable: true, enumerable: true, configurable: true }, weight: { value: 80, writable: false, enumerable: false, configurable: false } }

// ====================================================================================

// Object.getOwnPropertyNames() => returns an array of all properties (including non-enumerable properties) found directly in a given object.

console.log(Object.getOwnPropertyNames(myObj)); // [ 'name', 'age', 'height', 'weight' ]
console.log(Object.keys(myObj)); // [ 'name', 'height' ] only because (enumerable: false)
