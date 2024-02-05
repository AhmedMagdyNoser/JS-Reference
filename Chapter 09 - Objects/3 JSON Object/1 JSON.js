/*

JSON

JSON stands for JavaScript Object Notation.

It is a lightweight data-interchange format that is used to transmit data between a server and web applications.

Methods:
JSON.stringify() => converts a JavaScript object to a JSON string
JSON.parse()     => converts a JSON string to a JavaScript object

These methods doesn't affect the original object and they return a new one.

*/

let user = '{ "name": "John", "age": 30 }'; // This is a string

console.log(user); // {"name":"John","age":30}
console.log(typeof user); // string

user = JSON.parse(user);

console.log(user); // { name: 'John', age: 30 }
console.log(typeof user); // object

user = JSON.stringify(user);

console.log(user); // {"name":"John","age":30}
console.log(typeof user); // string

// ======================================

/*

In JSON:

  Keys must be strings, written with double quotes.
  Comments are not allowed.

*/
