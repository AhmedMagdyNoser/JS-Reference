/*

Promise.race()

It takes an iterable of promises as an input.

It returns the first promise settled promise (fulfilled or rejected).

*/

// Example
Promise.race([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]); // { <state>: "fulfilled", <result>: 1 }

// ------------------------------------------------------------

// Example (with reject)
Promise.race([Promise.reject(1), Promise.resolve(2), Promise.reject(3)]); // { <state>: "rejected", <result>: 1 }

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

Promise.race([p1, p2, p3]); // { <state>: "fulfilled", <result>: "three" }


// ------------------------------------------------------------

console.log('-------------------');

// Real world example
// We need to get the data of Egypt in a specific time (1.5 seconds for example) or reject the promise.

(async function getData() {
  Promise.race([
    fetch('https://restcountries.com/v3.1/name/egypt').then((res) => res.json()),
    new Promise((resolve, reject) => setTimeout(reject, 1500, 'Timeout')),
  ])
    .then((data) => console.log(data[0].name.common))
    .catch((err) => console.log(err));
})();
