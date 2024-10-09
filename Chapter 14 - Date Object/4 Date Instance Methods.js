// Date Instance Methods

const date1 = new Date(404344800000); // Unix time to 25 Oct 1982

// ===========================================================================================

// Date methods

console.log(date1.toLocaleDateString()); // Locally
console.log(date1.toLocaleTimeString()); // Locally
console.log(date1.toDateString()); // Locally
console.log(date1.toTimeString()); // Locally
console.log(date1.toString()); // Locally
console.log(date1.toISOString()); // UTC
console.log(date1.toJSON()); // UTC
console.log(date1.toUTCString()); // UTC

// ===========================================================================================

// toLocaleDateString() and toLocaleTimeString() methods

// You can pass two arguments to the toLocaleDateString() and toLocaleTimeString():
//   1 A locale string that contain one or more language. (e.g. en-UK, en-US, ar-EG)
//   2 An object that contains one or more properties that specify comparison options.

console.log(
  date1.toLocaleDateString('en-UK', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
  })
);
