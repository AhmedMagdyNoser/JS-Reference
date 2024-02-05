/*

then(), catch(), and finally() methods

They are used to handle the result of a Promise.
They are instance methods of the Promise object which means that they are in the Promise.prototype object.

The callbacks that are passed to these methods are executed asynchronously in the microtask queue.
The microtask queue is executed after the call stack is empty.

These methods also return a Promise object. This allows us to chain multiple methods together.
For example, myPromise.then().then().catch().finally();

*/
