// Classes

// Class syntax in JavaScript is just a syntactic sugar over the constructor function.
// It's recommended to use classes instead of constructor functions.
// Its name is recommended to be in PascalCase, but it's not a must.

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() { // This function is added to the User.prototype object.
    return `My name is ${this.name}`;
  }
}

// Of course, the User class has a prototype property - like any other function.
console.log(User.prototype); // {constructor: ƒ, getName: ƒ}
// Here is the point, the getName() function is created once in the prototype.

// ------------------------------------

let user1 = new User('Ahmed', 30);
let user2 = new User('Ali', 20);
let user3 = new User('Mohamed', 25);

console.log(user1); // { name: 'Ahmed', age: 30 }
console.log(user2); // { name: 'Ali', age: 20 }
console.log(user3); // { name: 'Mohamed', age: 25 }

console.log(user1.__proto__); // {constructor: ƒ, getName: ƒ} (User.prototype)

// All users inherit the getName function from the user prototype
