/*

finally() method:

It is used to attach a callback that will be executed AFTER the Promise is resolved or rejected.
It takes one argument, a callback.

For example, myPromise.finally( () => { code } );

*/

let myPromise = new Promise((resolve, reject) => {
  true ? resolve('I am OK') : reject('I am crashed');
});

myPromise.finally(() => {
  console.log('myPromise is resolved or rejected');
});

// ============================================================

// The finally() method returns a new promise.

// It's the same as then() and catch() methods with the following differences:
// 1. If the callback function returns a value, the finally() will ignore it and return a new promise as the previous one.
// 2. In case of rejected promises, if the callback function returns a promise, the finally() will ignore it and return a new promise as the previous one.

let resolvedPromise = new Promise((resolve, reject) => {
  console.log('Resolving Promise');
  resolve('Resolved');
});

console.log(resolvedPromise); // Promise { state: 'fulfilled', result: 'Resolved' }

console.log(resolvedPromise.finally()); // Promise { state: 'fulfilled', result: 'Resolved' }

console.log(resolvedPromise.finally(() => x)); // Promise { state: 'rejected', result: ReferenceError: x is not defined }

console.log(resolvedPromise.finally(() => {})); // Promise { state: 'fulfilled', result: 'Resolved' } (Different)

console.log(resolvedPromise.finally(() => 'Yes')); // Promise { state: 'fulfilled', result: 'Resolved' } (Different)

console.log(resolvedPromise.finally(() => Promise.resolve('Yes'))); // Promise { state: 'fulfilled', result: 'Resolved' }

console.log(resolvedPromise.finally(() => Promise.reject('No'))); // Promise { state: 'rejected', result: 'No' }

// ------------------------------------------------------------

let rejectedPromise = new Promise((resolve, reject) => {
  console.log('Rejecting Promise');
  reject('Rejected');
});

console.log(rejectedPromise); // Promise { state: 'rejected', result: 'Rejected' }

console.log(rejectedPromise.finally()); // Promise { state: 'rejected', result: 'Rejected' }

console.log(rejectedPromise.finally(() => x)); // Promise { state: 'rejected', result: ReferenceError: x is not defined }

console.log(rejectedPromise.finally(() => {})); // Promise { state: 'rejected', result: 'Rejected' } (Different)

console.log(rejectedPromise.finally(() => 'No')); // Promise { state: 'rejected', result: 'Rejected' } (Different)

console.log(rejectedPromise.finally(() => Promise.resolve('Yes'))); // Promise { state: 'rejected', result: 'Rejected' } (Different)

console.log(rejectedPromise.finally(() => Promise.reject('No'))); // Promise { state: 'rejected', result: 'No' }
