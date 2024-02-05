// Copying Objects

let user1 = {
  name: 'John',
  age: 30,
};

// ===========================================================================================

// Wrong way to copy an object

let newUser = user1; // newUser is a reference to the user object

// But if you change in the user object, the newUser object will be changed too:
user1.name = 'Ahmed';

console.log(user1); // { name: 'Ahmed', age: 30 }
console.log(newUser); // { name: 'Ahmed', age: 30 }

// This is because objects are reference types

// ===========================================================================================

// To solve this problem, you can use one of the following methods:

newUser = { ...user1 }; // or
newUser = Object.assign({}, user1);

// But in case of nested objects, the nested objects will be copied by reference, not by value

user1 = {
  name: 'John',
  age: 30,
  address: {
    city: 'Cairo',
    country: 'Egypt',
  },
};

newUser = { ...user1 }; // or newUser = Object.assign({}, user);

user1.address.city = 'Alexandria';

console.log(user1.address); // { city: 'Alexandria', country: 'Egypt' }
console.log(newUser.address); // { city: 'Alexandria', country: 'Egypt' }

// ===========================================================================================

// To solve all these problems, you can use JSON.parse() and JSON.stringify() methods

newUser = JSON.parse(JSON.stringify(user1));
