// include(), startsWith(), and endsWith() methods

const S = 'Ahmed Magdy Ibrahim';

// Use the includes() method to check if a string is a substring of another string
console.log(S.includes('Magdy')); // true
console.log(S.includes('Noser')); // false

// Use the startsWith() method to check if a string starts with a substring
console.log(S.startsWith('Ahmed')); // true
console.log(S.startsWith('Magdy')); // false
console.log(S.startsWith('Magdy', 6)); // true (The second argument is the starting index to search from)

// Use the endsWith() method to check if a string ends with a substring
console.log(S.endsWith('Ibrahim')); // true
console.log(S.endsWith('Magdy')); // false
console.log(S.endsWith('Magdy', 11)); // true (The second argument is the ending index to search to)
