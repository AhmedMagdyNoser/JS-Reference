// bind() method is used to create a new function with a new 'this' value.

let user = { name: 'John' };

function printName() {
  console.log(this.name);
}

let printUserName = printName.bind(user); // printUserName is a new function with a new 'this' value.

printUserName(); // John // something like user.printName().
