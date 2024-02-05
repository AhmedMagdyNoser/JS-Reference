// Object Static Methods

let user = {
  name: 'John',
  age: 30,

  sayHello: function () {
    return 'Hello ' + this.name; // this refers to the object itself
  },
};

console.log(Object.keys(user)); // [ 'name', 'age', 'sayHello' ]
console.log(Object.values(user)); // [ 'Ali', 30, f ]
console.log(Object.entries(user)); // [ [ 'name', 'Ali' ], [ 'age', 30 ], [ 'sayHello', f ]
