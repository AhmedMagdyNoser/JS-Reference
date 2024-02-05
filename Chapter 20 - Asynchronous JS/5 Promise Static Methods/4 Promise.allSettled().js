/*

Promise.allSettled()

It takes an iterable of promises as an input.

It returns a fulfilled promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

It can't garantee the order of the results.  

*/


// Example
Promise.allSettled([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]) // { <state>: "fulfilled", <result>: [{status: "fulfilled", value: 1}, {status: "fulfilled", value: 2}, {status: "fulfilled", value: 3}] }

// ------------------------------------------------------------

// Example (with reject)
Promise.allSettled([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]) // { <state>: "fulfilled", <result>: [{status: "fulfilled", value: 1}, {status: "rejected", reason: 2}, {status: "fulfilled", value: 3}] }

// ------------------------------------------------------------

// Example
const ap1 = Promise.allSettled([1, 2, 3]);
const ap2 = Promise.allSettled([1, 2, 3, Promise.resolve(500)]);
const ap3 = Promise.allSettled([1, 2, 3, Promise.reject(500)]);

// Using setTimeout, we can execute code after the queue is empty
setTimeout(() => {
  console.log(ap1); // { <state>: "fulfilled", <result>: Array[3] }
  console.log(ap2); // { <state>: "fulfilled", <result>: Array[4] }
  console.log(ap3); // { <state>: "fulfilled", <result>: Array[4] }
});
