/*

catch() method:

It is used to handle rejected promises.
It takes one argument, a callback for failure (executed if the promise is rejected).

For example, myPromise.catch( () => { code if rejected } );

*/

let myPromise = new Promise((resolve, reject) => {
  false ? resolve('I am OK') : reject('I am crashed');
});

myPromise.catch((result) => {
  // the result property of the promise is passed as an argument to this callback
  console.log('myPromise is rejected and its result is : ' + result);
});

// Instead of 'result', we usually name the parameter of the callback 'error' or 'err'.
// For example, myPromise.catch( (error) => { console.log(error) } );

// ============================================================

// The catch() method returns a new promise. It is the same as then() method.

let rejectedPromise = new Promise((resolve, reject) => {
  console.log('Rejecting Promise');
  reject('Rejected');
});

console.log(rejectedPromise); // Promise { state: 'rejected', result: 'Rejected' }

console.log(rejectedPromise.catch()); // Promise { state: 'rejected', result: 'Rejected' }

console.log(rejectedPromise.catch(() => x)); // Promise { state: 'rejected', result: ReferenceError: x is not defined }

console.log(rejectedPromise.catch(() => {})); // Promise { state: 'fulfilled', result: undefined }

console.log(rejectedPromise.catch((error) => error)); // Promise { state: 'fulfilled', result: 'Rejected' }

console.log(rejectedPromise.catch(() => 'No')); // Promise { state: 'fulfilled', result: 'No' }

console.log(rejectedPromise.catch(() => Promise.resolve('Yes'))); // Promise { state: 'fulfilled', result: 'Yes' }

console.log(rejectedPromise.catch(() => Promise.reject('No'))); // Promise { state: 'rejected', result: 'No' }
