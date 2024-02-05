/*

'new' keyword

'new' keyword is used to create an object from a function

It does the following:
  1 - Creates a new empty object and assigns it to 'this'.
  2 - The 'this' (the new object) is returned by default.

*/

function user() {
  // When using 'new' keyword: this = {};
  console.log('Hello from user function');
  // When using 'new' keyword: return this;
}

// Of course, the user() function has a prototype property - like any other function.
console.log(user.prototype); // {constructor: ƒ}

// ------------------------------------

let user1 = new user(); // This logs 'Hello from user function' and returns an empty object

console.log(user1); // {}
console.log(user1.__proto__); // (user.prototype)
console.log(user1.__proto__.__proto__); // (Object.prototype)

// user1 >> user.prototype >> Object.prototype

// ------------------------------------

// What if we don't use 'new' keyword?

const testUser = user(); // This logs 'Hello from user function' and doesn't return anything
console.log(testUser); // undefined
