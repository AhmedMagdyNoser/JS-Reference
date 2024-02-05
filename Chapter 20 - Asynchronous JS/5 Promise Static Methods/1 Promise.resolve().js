/*

Promise.resolve()

It takes a value as an input.

It returns a fulfilled promise with the given value. If the value is a promise, it returns it.

*/

// Example
Promise.resolve(1); // { <state>: "fulfilled", <result>: 1 }

// ------------------------------------------------------------

// Example
const p1 = Promise.resolve(100);

p1.then((value) => {
  console.log(value); // 100
});

// ------------------------------------------------------------

// Example
Promise.resolve(1).then((value) => console.log(value)); // 1
