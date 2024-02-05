// Rest Parameter

// The rest parameter allows a function to accept an indefinite number of arguments as an array.
// It is denoted by three dots (...) followed by a parameter name.

function regularFunction(...args) {
  console.log(args);
}

regularFunction(100, 200); // [100, 200]

// ------------------------------------

const ArrowFunction = (...args) => {
  console.log(args);
};

ArrowFunction(100, 200); // [100, 200]

// ------------------------------------

function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
console.log(sum(10)); // Output: 10
console.log(sum()); // Output: 0