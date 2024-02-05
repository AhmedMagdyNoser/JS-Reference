/*

Promise.reject()

It takes a value as an input.

It returns a rejected promise with the given value. If the value is a promise, it returns it.

*/

// Example
Promise.reject(1); // { <state>: "rejected", <result>: 1 }

// ------------------------------------------------------------

// Example
const p1 = Promise.reject(100);

p1.catch((value) => {
  console.log(value); // 100
});

// ------------------------------------------------------------

// Example
Promise.reject(1).catch((value) => console.log(value)); // 1
