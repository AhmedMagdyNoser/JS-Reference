// Nubmer Static Methods

// Number.parseInt() parses a string argument and returns an integer of the specified radix or base.
console.log(Number.parseInt(100)); // 100 (number)
console.log(Number.parseInt(100.15)); // 100 (number)
console.log(Number.parseInt('100')); // 100 (number)
console.log(Number.parseInt('100.15')); // 100 (number)
console.log(Number.parseInt('100Ali')); // 100 (number)

// Number.parseFloat() parses a string argument and returns a floating point number.
console.log(Number.parseFloat(100)); // 100 (number)
console.log(Number.parseFloat(100.15)); // 100.15 (number)
console.log(Number.parseFloat('100')); // 100 (number)
console.log(Number.parseFloat('100.15')); // 100.15 (number)
console.log(Number.parseFloat('100Ali')); // 100 (number)

// Number.isInteger() determines whether the passed value is an integer.
console.log(Number.isInteger(100)); // true
console.log(Number.isInteger('100')); // false
console.log(Number.isInteger('100Ali')); // false
console.log(Number.isInteger(Infinity)); // false

// Number.isNaN() determines whether the passed value is NaN.
console.log(Number.isNaN(100)); // false
console.log(Number.isNaN('100')); // false
console.log(Number.isNaN('100Ali')); // false
console.log(Number.isNaN(NaN)); // true

// Number.isFinite() determines whether the passed value is a finite number.
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite('100')); // false
console.log(Number.isFinite('100Ali')); // false
console.log(Number.isFinite(Infinity)); // false

// ===========================================================================================

/*

Note:

parseInt(), parseFloat(), isNaN(), isFinite() are global functions that may be used without calling Number.
But their output may be different from the Number object methods, as they may perform type coercion.

Number.isFinite('100') returns false because '100' is a string, not a number.
isFinite('100') returns true because '100' is coerced to the number 100, which is a finite number.

*/