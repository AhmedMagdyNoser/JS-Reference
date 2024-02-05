// Object.prototype

// In JS, there is a base object that all other objects inherit from it, it's the Object.prototype object.

// Object() is a function that creates objects
console.log(Object); // ƒ Object() { [native code] }

// Object.prototype contains all the methods that all objects inherit from (like toString, ...etc)
console.log(Object.prototype); // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

// Object.prototype doesn't inherit from any other object
console.log(Object.prototype.__proto__); // null

// ------------------------------------

// Example

const user = { name: 'Ali' }; // A shorthand for const user = new Object({ name: 'Ali' });

console.log(user.__proto__); // Object.prototype

// user >> Object.prototype
