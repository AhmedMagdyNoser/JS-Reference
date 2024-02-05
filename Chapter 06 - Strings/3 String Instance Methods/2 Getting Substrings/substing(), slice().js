// Getting a substring

const S = 'Ahmed Magdy Ibrahim';

// Use the slice() and the substring() method to get a substring

// They both take two arguments: the starting index and the ending index

// The ending index is not included in the substring
// The ending index is optional, if not provided, the substring will be to the end of the string

console.log(S.substring(0, 5)); // 'Ahmed'
console.log(S.substring(6, 11)); // 'Magdy'
console.log(S.substring(6)); // 'Magdy Ibrahim'

console.log(S.slice(0, 5)); // 'Ahmed'
console.log(S.slice(6, 11)); // 'Magdy'
console.log(S.slice(6)); // 'Magdy Ibrahim'

// The slice() method can take negative indexes
// Negative indexes are counted from the end of the string. The last character has an index of -1

console.log(S.slice(-13, -8)); // 'Magdy'
console.log(S.slice(-13)); // 'Magdy Ibrahim'

// Don't use the substr() method, it's deprecated.
