// await keyword

// It works only inside async functions. This is because if you put await in synchronous code, you would block the (main) thread.
// It makes JavaScript wait until that promise settles (fulfilled or rejected) and returns its result.

let myPromise = new Promise((resolve, reject) => {
  resolve('I am OK');
});

async function myAsyncFunction() {
  let result = await myPromise; // Wait until myPromise is settled (fulfilled or rejected) + return its result
  console.log(result); // I am OK (The result of myPromise) (executed after waiting in the microtask queue)
}

myAsyncFunction();

// It is the same as:
function OldWay() {
  myPromise.then((result) => console.log('Old way: ', result)); // I am OK (The result of myPromise) (the callback is executed after waiting in the microtask queue)
}

OldWay();

// await keyword just makes the code looks like synchronous code. It is a syntactic sugar for promises.
// Any lines of code after await will be executed after waiting in the microtask queue.
