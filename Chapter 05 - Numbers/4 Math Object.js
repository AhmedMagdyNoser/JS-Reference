// Math Object

// Math is a built-in object that has static properties and methods for mathematical constants and functions.

console.log(Math.E); // 2.718281828459045 (number)
console.log(Math.PI); // 3.141592653589793 (number)

// Math.round() returns a number rounded to the nearest integer.
console.log(Math.round(99.75)); // 100
console.log(Math.round(99.25)); // 99

console.log(Math.ceil(99.5)); // 100 (The Next Int) (the smallest integer greater than or equal to its numeric argument)
console.log(Math.floor(99.5)); // 99 (The Previous Int) (the greatest integer less than or equal to its numeric argument)

console.log(Math.trunc(99.5)); // 99 removes any fractional digits

console.log(Math.min(1, 2, 3)); // 1
console.log(Math.max(1, 2, 3)); // 3

console.log(Math.random()); // A pseudorandom number between 0 and 1 (doesn't reach 1).
console.log(Math.random() * 5); // A pseudorandom number between 0 and 5 (doesn't reach 5).
console.log(Math.trunc(Math.random() * 100)); // A pseudorandom INTEGER between 0 and 100 (doesn't reach 100).

// Math has many other mathematical methods like pow(), abs(), sin(), cos(), tan(), etc.

// ------------------------------------ (Exercises Below) ------------------------------------

// Try to find a random INTEGER between 5 and 10.