/*

Promieses

They are objects used as a placeholder for a future result of an asynchronous operation.
They are a way to handle asynchronous operations more cleanly and with better structure than using callbacks.

A Promise object has two properties: state and result.
A promise state can be one of the following:
1. Pending:
    - The promise initial state. The promise has not been fulfilled or rejected yet.
    - Result is undefined.
2. Fulfilled: (resolved)
    - The operation has completed successfully and the promise now has a value.
    - Result is the resolved value.
3. Rejected:
    - The operation has failed and the promise has a reason for the failure.
    - Result is the error.

The properties state and result are internal and cannot be accessed directly. Instead, we use the methods then() and catch() to access them.

*/
