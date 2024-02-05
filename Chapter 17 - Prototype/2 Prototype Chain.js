// Prototype Chain

// In JavaScript, when creating a function, there are actually two objects created:
// 1. The function object itself
// 2. The prototype object

// The function object has a property called prototype, which points to the prototype object.
// The prototype object has a property called constructor, which points back to the function object.

function foo() {}

console.log(foo); // ƒ foo() { }
console.log(foo.prototype); // {constructor: ƒ}
console.log(foo.prototype.constructor); // ƒ foo() { }
console.log(foo.prototype.constructor.prototype); // {constructor: ƒ}
console.log(foo.prototype.constructor.prototype.constructor); // ƒ foo() { } (and so on)

// ------------------------------------

// In JS, there is a base object that all other objects inherit from it, it's the Object.prototype object.

// So the foo.prototype inherits from Object.prototype.
console.log(foo.prototype.__proto__); // Object.prototype

// ------------------------------------

// When we create an object from a function using the new keyword, the __proto__ property of the new object points to the prototype object of the function.

const newObj = new foo(); // empty object

console.log(newObj.__proto__); // foo.prototype {constructor: ƒ}
console.log(newObj.__proto__.constructor); // ƒ foo() { }
