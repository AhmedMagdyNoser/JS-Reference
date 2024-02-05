// 2. A function can be passed as an argument to other functions.

function sayHello() {
  return 'Hello!';
}

function greetWithName(helloMessage, name) {
  console.log(helloMessage() + name); // helloMessage is called a callback function
}

greetWithName(() => 'Hello!', ' JavaScript!'); // () => 'Hello!' is the callback function
greetWithName(sayHello, ' JavaScript!'); // sayHello is the callback function

// =======================================

// callback is a function that is passed as an argument.

let str = 'Hi!';

// Create a function that loops through the characters in a string and does something with each character.

function myMap(str, callback) {
  for (let char of str) {
    callback(char);
  }
}

myMap(str, (char) => console.log(char));

// (char) => console.log(char) is the callback function
// The callback function here prints each character in the string.

// =======================================

// Simulate error handling with callbacks

function getPosts(callback) {
  callback('Posts', false);
}

getPosts((posts, err) => {
  if (err) console.error(err);
  else console.log(posts);
});
