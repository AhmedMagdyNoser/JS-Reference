// apply() method also is used to call a function.

// The difference between call() and apply() is that apply() takes an array of arguments as the second argument.

let objectJohn = {
  name: 'John',
  greet: function (message) {
    console.log(message, this.name);
  },
};

let objectAli = { name: 'Ali' };

objectJohn.greet.apply(objectAli, ['Hello']); // Hello Ali
