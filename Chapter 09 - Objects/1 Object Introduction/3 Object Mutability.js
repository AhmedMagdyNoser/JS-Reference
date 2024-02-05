// Object Mutability

// Objects are mutable, meaning that you can change their properties even after they are created. even if the object is declared as a constant.

const user = {
  name: 'John',
  age: 30,
};

console.log(user); // { name: 'John', age: 30 }

user.name = 'Ali';

console.log(user); // { name: 'Ali', age: 30 }

// ===========================================================================================

// But you can't change the object itself if it's declared as a constant

// user = { name: 'Ahmed', age: 25 }; // TypeError: Assignment to constant variable.
