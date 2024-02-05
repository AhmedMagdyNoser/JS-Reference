// Number Instance Methods

let myNum = 100;

// toString() methods return a string representation of an object
console.log(myNum.toString()); // 100 (string)
console.log(myNum.toString(2)); // 1100100 (string) binary representation of 100 is 1100100
console.log(myNum.toString(8)); // 144 (string) octa representation of 100 is 144
console.log(myNum.toString(16)); // 64 (string) hexa representation of 100 is 64

// toFixed() returns a string representing a number in fixed-point notation.
console.log(myNum.toFixed(2)); // 100.00 (string)
console.log((100.1515).toFixed()); // 100 (string)
console.log((100.1515).toFixed(2)); // 100.15 (string)

// Notice that c itself didn't change.
console.log(myNum); // 100 (number)
