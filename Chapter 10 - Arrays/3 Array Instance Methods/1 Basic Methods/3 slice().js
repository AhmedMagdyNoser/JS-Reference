// Getting Subarray

const S = ['Ahmed', 'Magdy', 'Ibrahim', 'Abdelrazek', 'Hassan', 'Mohamed'];

// Use the slice() method to get a subarray

// It takes two arguments: the starting index and the ending index
// The ending index is not included in the subarray
// The ending index is optional, if not provided, the subarray will be to the end of the array

console.log(S.slice(0, 2)); // ['Ahmed', 'Magdy']
console.log(S.slice(0)); // ['Ahmed', 'Magdy', 'Ibrahim', 'Abdelrazek', 'Hassan', 'Mohamed']

// The slice() method can take negative indexes
// Negative indexes are counted from the end of the array. The last character has an index of -1

console.log(S.slice(-2)); // ['Hassan', 'Mohamed']
console.log(S.slice(-4, -2)); // ['Ibrahim', 'Abdelrazek']
