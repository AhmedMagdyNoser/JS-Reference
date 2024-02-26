// Object Introduction

// Objects are non-primitive data types that are used to store collections of data and more complex entities.

// They are the fundamental building blocks of JavaScript.
// They have properties used to describe them. These properties can be any of the data types.
// They don't acually own methods, instead, they own properties that can be functions.

let user1 = {
  name: 'John',
  age: 30,

  sayHello: function () {
    return 'Hello ' + this.name; // this refers to the object itself
  },

  // ES6
  sayHi() {
    return 'Hi ' + this.name; // this refers to the object itself
  },

  // ES6
  sayGoodBye: () => {
    return 'Good Bye '; // Arrow functions don't have their own this value
  },
};

console.log(user1.name); // John (Dot Notation)
console.log(user1['name']); // John (Bracket Notation) - We can use an expression inside the brackets like user1['na' + 'me']

console.log(user1.age); // 30
console.log(user1['age']); // 30

console.log(user1.sayHello()); // Hello John
console.log(user1.sayHi()); // Hi John
console.log(user1.sayGoodBye()); // Good Bye

// ===========================================================================================

// Nested Objects

// As mentioned before, objects properties can be any of the data types, including objects themselves.

let user2 = {
  name: 'John',
  age: 30,
  address: {
    street: '123 JS Street',
    city: 'JS City',
    state: 'JS State',
  },
};

console.log(user2.address.state); // JS State

// ===========================================================================================

// Deleting Properties

// The delete operator can be used to delete properties from an object.

let user3 = {
  name: 'John',
  age: 30,
};

console.log(user3); // { name: 'John', age: 30 }

delete user3.age;

console.log(user3); // { name: 'John' }
