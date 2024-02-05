// async keyword

// The keyword async before a function makes the function return a promise

async function myAsyncFunction() {
  console.log('Hello from Async Function');
  return 'Hello'; // Return 'Hello' as a result of a promise
}

/*
It is the same as:
function myFunction() {
  return Promise.resolve("Hello");
}
*/

myAsyncFunction(); // Hello from Async Function (It is executed in normal way)

console.log(myAsyncFunction()); // Promise { state: 'fulfilled', result: 'Hello' }

// Use then() to get the result (normal way)

myAsyncFunction().then((result) => console.log(result)); // Hello (Remember: This callback is executed after waiting in the microtask queue)

console.log('Hello from Main thread');

// ============================================================

// If an error occurs inside an async function, it returns a rejected promise whose result is the error.
