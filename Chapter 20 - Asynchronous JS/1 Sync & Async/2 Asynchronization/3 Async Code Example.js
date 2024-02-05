// Asynchronous JS Example

// To write asynchronous JavaScript. We can use promises.

const codeBlocker = () => {
  Promise.resolve().then(() => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log('Billion loops completed!');
  });
};

console.log('Hello');
codeBlocker() // The promise is delegated to the browser (or to Node.js).
console.log('JavaScript');

// Hello
// JavaScript
// Billion loops completed!

// Explanation:
// The first console.log() statement is executed.
// Then, the codeBlocker() function is called. It creates a promise and delegates its follow-up code to the browser (or to Node.js).
// Finally, the last console.log() statement is executed.
