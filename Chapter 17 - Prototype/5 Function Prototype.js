// Function.prototype

// Function.prototype is an object that inherits from Object.prototype

// Function() is a function that creates functions
console.log(Function); // ƒ Function() { [native code] }

// Function.prototype contains all the methods that all functions inherit from (like call, apply, ...etc)
console.log(Function.prototype); // ƒ () { [native code] }

// But it's a little bit different: the Function.prototype itself is a function object

// Function.prototype >> Object.prototype

console.log(Function.prototype.__proto__); // Object.prototype

// ------------------------------------

const fun = () => true;

console.log(fun);

console.log(fun.__proto__); // Function.prototype
console.log(fun.__proto__.__proto__); // Object.prototype

// fun >> Function.prototype >> Object.prototype
