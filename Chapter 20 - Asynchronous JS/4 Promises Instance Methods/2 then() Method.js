/*

then() method:

It takes two arguments:
  1. A callback for success (executed if the promise is resolved)
  2. A callback for failure (executed if the promise is rejected).

For example, myPromise.then( () => { code if resolved }, () => { code if rejected } );

*/

let myPromise = new Promise((resolve, reject) => {
  true ? resolve('I am OK') : reject('I am crashed');
});

myPromise.then(
  (result) => {
    // the result property of the promise is passed as an argument to this callback
    console.log('myPromise is resolved and its result is : ' + result);
  },
  (result) => {
    // the result property of the promise is passed as an argument to this callback
    console.log('myPromise is rejected and its result is : ' + result);
  }
);

// The first callback is executed if the promise is resolved.
// The second callback is executed if the promise is rejected.

// ============================================================

// The then() method returns a new promise.

// If the callback function is not provided, the then() will return a new promise { state: (the state of the previous promise), result: (the result of the previous promise) }
// If the callback function contains an error, the then() will return a new promise { state: rejected, result: (the error) }
// If the callback function returns a value, the then() will return a new promise { state: fulfilled, result: (the value returned by the callback) }
// If the callback function returns a promise, the then() will return this promise

// ------------------------------------------------------------

// then() of Resolved Promises

let resolvedPromise = new Promise((resolve, reject) => {
  console.log('Resolving Promise');
  resolve('Resolved');
});

console.log(resolvedPromise); // Promise { state: 'fulfilled', result: 'Resolved' }

console.log(resolvedPromise.then()); // Promise { state: 'fulfilled', result: 'Resolved' }

console.log(resolvedPromise.then(() => x)); // Promise { state: 'rejected', result: ReferenceError: x is not defined }

console.log(resolvedPromise.then(() => {})); // Promise { state: 'fulfilled', result: undefined }

console.log(resolvedPromise.then((result) => result)); // Promise { state: 'fulfilled', result: 'Resolved' }

console.log(resolvedPromise.then(() => 'Yes')); // Promise { state: 'fulfilled', result: 'Yes' }

console.log(resolvedPromise.then(() => Promise.resolve('Yes'))); // Promise { state: 'fulfilled', result: 'Yes' }

console.log(resolvedPromise.then(() => Promise.reject('No'))); // Promise { state: 'rejected', result: 'No' }

// ------------------------------------------------------------

// then() of Rejected Promises

let rejectedPromise = new Promise((resolve, reject) => {
  console.log('Rejecting Promise');
  reject('Rejected');
});

console.log(rejectedPromise); // Promise { state: 'rejected', result: 'Rejected' }

console.log(rejectedPromise.then()); // Promise { state: 'rejected', result: 'Rejected' }

console.log(rejectedPromise.then(null, () => x)); // Promise { state: 'rejected', result: ReferenceError: x is not defined }

console.log(rejectedPromise.then(null, () => {})); // Promise { state: 'fulfilled', result: undefined }

console.log(rejectedPromise.then(null, (error) => error)); // Promise { state: 'fulfilled', result: 'Rejected' }

console.log(rejectedPromise.then(null, () => 'No')); // Promise { state: 'fulfilled', result: 'No' }

console.log(rejectedPromise.then(null, () => Promise.resolve('Yes'))); // Promise { state: 'fulfilled', result: 'Yes' }

console.log(rejectedPromise.then(null, () => Promise.reject('No'))); // Promise { state: 'rejected', result: 'No' }

// ============================================================

// Instead of using the second argument of then(), you can use the catch() method.
