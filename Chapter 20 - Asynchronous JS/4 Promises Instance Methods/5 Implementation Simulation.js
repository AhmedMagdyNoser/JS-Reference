// Promise Implementation Simulation

class PromiseClass {
  constructor(executor) {
    this.state = 'pending';
    this.result = undefined;

    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  resolve(result) {
    this.state = 'fulfilled';
    this.result = result;
  }

  reject(result) {
    this.state = 'rejected';
    this.result = result;
  }

  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.result);
    }

    if (this.state === 'rejected') {
      onRejected(this.result);
    }

    // Return a new promise
    // If the callback function is not provided, the then() will return a new promise { state: (the state of the previous promise), result: (the result of the previous promise) }
    // If the callback function contains an error, the then() will return a new promise { state: rejected, result: (the error) }
    // If the callback function returns a value, the then() will return a new promise { state: fulfilled, result: (the value returned by the callback) }
    // If the callback function returns a promise, the then() will return this promise
  }

  catch(onRejected) {
    if (this.state === 'rejected') {
      onRejected(this.result);
    }

    // Return a new promise (the same as then() method)
    // If the callback function is not provided, the catch() will return a new promise { state: (the state of the previous promise), result: (the result of the previous promise) }
    // If the callback function contains an error, the catch() will return a new promise { state: rejected, result: (the error) }
    // If the callback function returns a value, the catch() will return a new promise { state: fulfilled, result: (the value returned by the callback) }
    // If the callback function returns a promise, the catch() will return this promise
  }

  finally(onFinally) {
    onFinally();

    // Return a new promise (the same as then() method with a little difference)
    // If the callback function is not provided, the finally() will return a new promise { state: (the state of the previous promise), result: (the result of the previous promise) }
    // If the callback function contains an error, the finally() will return a new promise { state: rejected, result: (the error) }
    // If the callback function returns a value, the finally() will return a new promise { state: (the state of the previous promise), result: (the result of the previous promise) }
    // If the callback function returns a promise, the finally() will return this promise (except if the orginal promise is rejected and the callback function returns a resolved promise, in this case the finally() will return a new promise as the original one)
  }
}

// ============================================================

let myPromise = new PromiseClass((resolve, reject) => {
  console.log('Hello from Promise');
  true ? resolve('OK') : reject('Error');
}); // The executor function is called immediately in normal synchronous code.

myPromise.then(
  (result) => {
    // the result property of the promise is passed as an argument to this callback
    console.log(result);
  },
  (error) => {
    // the result property of the promise is passed as an argument to this callback
    console.log(error);
  }
);
