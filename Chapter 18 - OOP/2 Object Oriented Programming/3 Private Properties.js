// Encapsulation

// Private Properties

// They are created by using a hash # prefix and cannot be legally referenced outside of the class.

class User {
  #name; // private property

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

const user1 = new User('Ahmed');

console.log(user1.getName()); // Ahmed
// console.log(user1.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
