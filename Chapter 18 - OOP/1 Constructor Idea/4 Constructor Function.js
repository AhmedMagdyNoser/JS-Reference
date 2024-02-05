// Constructor Function

// The constructor function creates a new object with the specified properties and methods.
// Its name is recommended to be in PascalCase, but it's not a must.

// You can use function declarations or function expressions. But not arrow functions.

function User(name, age) {
  // When using 'new' keyword: this = {};
  this.name = name;
  this.age = age;
  this.getName = function () {
    return `My name is ${this.name}`;
  };
  // When using 'new' keyword: return this;
}

// Of course, the User() function has a prototype property - like any other function.
console.log(User.prototype); // {constructor: ƒ}

// ------------------------------------

let user1 = new User('Ahmed', 30);
let user2 = new User('Ali', 20);
let user3 = new User('Mohamed', 25);

console.log(user1); // { name: 'Ahmed', age: 30, getName: f }
console.log(user2); // { name: 'Ali', age: 20, getName: f }
console.log(user3); // { name: 'Mohamed', age: 25, getName: f }

console.log(user1.__proto__); // (User.prototype)
console.log(user1.__proto__.__proto__); // (Object.prototype)

// user1 >> User.prototype >> Object.prototype

// ------------------------------------

// But the problem is that the getName() is created for each user, this is not good.
