// Asynchronous JS Example

// Let's look at an example of asynchronous JavaScript.
// We'll use the fetch() function to make a network request to an API.
// The callback function will be called after the request has been completed.

console.log('Hello');

fetch('https://api-to-call.com/endpoint').then(() => {
  console.log('Network request finished');
});

console.log('JavaScript');

// Hello
// JavaScript
// Network request finished

// Explanation:
// The first console.log() statement is executed.
// Then, the fetch() function is called. The fetch() function is asynchronous, so it is delegated to the browser (or to Node.js).
// Finally, the last console.log() statement is executed.
