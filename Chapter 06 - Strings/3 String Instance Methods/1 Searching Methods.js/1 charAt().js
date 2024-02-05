// charAt()

const S = 'Ahmed Magdy Ibrahim';

console.log(S.charAt(0)); // 'A'
console.log(S.charAt(1)); // 'h'
console.log(S.charAt(75)); // '' (empty string)

// Notice that charAt() returns an empty string if the index is out of range.

// ===========================================================================================

// charAt() is similar to using the square brackets notation to access characters in a string.

console.log(S[0]); // 'A'
console.log(S[1]); // 'h'
console.log(S[75]); // undefined

// Notice that using the square brackets notation returns undefined if the index is out of range.
