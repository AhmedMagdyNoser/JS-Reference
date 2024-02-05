// Array.prototype

// Array.prototype is an object that inherits from Object.prototype

// Array() is a function that creates arrays
console.log(Array); // ƒ Array() { [native code] }

// Array.prototype contains all the methods that all arrays inherit from (like map, filter, ...etc)
console.log(Array.prototype); // [constructor: ƒ, concat: ƒ, copyWithin: ƒ, fill: ƒ, find: ƒ, …]

// Array.prototype >> Object.prototype

console.log(Array.prototype.__proto__); // Object.prototype

// ------------------------------------

// Example

const nums = [1, 2, 3]; // A shorthand for const nums = new Array(1, 2, 3);

console.log(nums.__proto__); // Array.prototype
console.log(nums.__proto__.__proto__); // Object.prototype

// nums >> Array.prototype >> Object.prototype
