/*

Promise.any()

It takes an iterable of promises as an input.

It returns the first fulfilled promise.

*/

// Example
Promise.any([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]) // { <state>: "fulfilled", <result>: 1 }

// ------------------------------------------------------------

// Example (with reject)
Promise.any([Promise.reject(1), Promise.reject(2), Promise.resolve(3)]); // { <state>: "fulfilled", <result>: 3 }

// ------------------------------------------------------------

// Example (if all promises are rejected)
Promise.any([Promise.reject(1), Promise.reject(2), Promise.reject(3)]); // { <state>: "rejected", <result>: AggregateError: All promises were rejected }

// ------------------------------------------------------------

// Example
const p1 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'one');
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'two');
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 50, 'three');
});

Promise.any([p1, p2, p3]); // { <state>: "fulfilled", <result>: "three" }
