// call() method is used to call a function.

function sayHello() {
  console.log('Hello!');
}

sayHello(); // Hello!
sayHello.call(); // Hello!

// --------------------------------------

let user = { name: 'John' };

function printOk() {
  console.log(this);
}

printOk(); // undefined.
printOk.call(); // undefined.

// call() method takes the object that will be used as the value of 'this' as the first argument.

printOk.call(user); // user object. // something like user1.printOk().

// --------------------------------------

let objectJohn = {
  name: 'John',
  greet: function (message) {
    console.log(message, this.name);
  },
};

let objectAli = { name: 'Ali' };

objectJohn.greet('Hello'); // Hello John
objectJohn.greet.call(objectAli, 'Hello'); // Hello Ali
