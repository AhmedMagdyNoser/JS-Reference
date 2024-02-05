/*

Promise.all()

It takes an iterable of promises as an input.

If all the promises resolve, it returns a fulfilled Promise whose result is an array of the results of the input promises.
If any of the promises reject, it returns a rejected Promise with the error, whether or not the other promises have resolved.

It can't garantee the order of the results.

*/

// Example
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]) // { <state>: "fulfilled", <result>: [1, 2, 3] }

// ------------------------------------------------------------

// Example (with reject)
Promise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]) // { <state>: "rejected", <result>: 2 }

// ------------------------------------------------------------

// Example
const ap1 = Promise.all([1, 2, 3]);
const ap2 = Promise.all([1, 2, 3, Promise.resolve(500)]);
const ap3 = Promise.all([1, 2, 3, Promise.reject(500)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(ap1); // { <state>: "fulfilled", <result>: Array[3] }
  console.log(ap2); // { <state>: "fulfilled", <result>: Array[4] }
  console.log(ap3); // { <state>: "rejected", <result>: 500 }
});
