/*

Promieses

Promise constructor takes a callback function:
- This callback function executes immediately when the Promise is created. (A.K.A. the executor)
- This callback function takes two callback functions as arguments: resolver and rejecter.
- The resolver callback function is used to resolve the promise (make its state fulfilled and set the result).
- The rejecter callback function is used to reject the promise (make its state rejected and set the result).

*/

// Pending Promise
let myPromise1 = new Promise(() => {
  console.log('Hello from Promise 1');
}); // The executor function is called immediately in normal synchronous code.

console.log(myPromise1); // Promise { state: 'pending', result: undefined }

// ------------------------------------------------------------

// Resolved Promise
let myPromise2 = new Promise((myResolver, myRejecter) => {
  console.log('Hello from Promise 2');
  myResolver("I'm OK"); // set the state to fulfilled and the result to "I'm OK"
});

console.log(myPromise2); // Promise { state: 'fulfilled', result: 'I'm OK' }

// ------------------------------------------------------------

// Rejected Promise
let myPromise3 = new Promise((myResolver, myRejecter) => {
  console.log('Hello from Promise 3');
  myRejecter("I'm crashed"); // set the state to rejected and the result to "I'm crashed"
});

console.log(myPromise3); // Promise { state: 'rejected', result: 'I'm crashed' }
