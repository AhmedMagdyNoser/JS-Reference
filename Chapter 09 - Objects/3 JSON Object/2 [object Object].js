// [object Object] appears when you try to convert an object to a string.

let user = {
  name: 'John',
  age: 30,
};

console.log(user.toString()); // [object Object]
console.log('Hello ' + user); // Hello [object Object]

// To solve this problem, you can use the JSON.stringify() method to convert the object to a string.

console.log('Hello ' + JSON.stringify(user)); // Hello {"name":"John","age":30}

// or simply
console.log('Hello ' + user.name); // Hello John
