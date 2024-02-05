// Synchronous JS Exmaple

const codeBlocker = () => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log('Billion loops completed!');
};

console.log('Hello');
codeBlocker(); // This will take a while to complete (blocking the next line of code from executing).
console.log('JavaScript');

// Hello
// Billion loops completed!
// JavaScript
