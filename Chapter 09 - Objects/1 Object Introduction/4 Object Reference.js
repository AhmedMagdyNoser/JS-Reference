// Object Reference

// Objects are reference types, meaning that when you assign an object to a variable, you're actually assigning a reference to the object in memory, not the object itself.

let user1 = {
  name: 'Ali',
  age: 30,
};

console.log(user1); // { name: 'Ali', age: 30 }

function modifyObject(obj) {
  obj.name = 'Ahmed'; // change the original object
}

modifyObject(user1);

console.log(user1); // { name: 'Ahmed', age: 30 }

// ===========================================================================================

// Objects are compared by reference
let obj1 = { age: 30 }; // 0x0001
let obj2 = obj1; // 0x0001
let obj3 = { age: 30 }; // 0x0002

console.log(obj1 === obj2); // true
console.log(obj1 === obj3); // false
