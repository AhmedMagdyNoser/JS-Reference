// Splitting Method

// the split() method splits a string into an array of substrings
// It takes one argument: the separator

const S = 'Ahmed Magdy Ibrahim';

console.log(S.split()); // ['Ahmed Magdy Ibrahim']
console.log(S.split('')); // ['A', 'h', 'm', 'e', 'd', ' ', 'M', 'a', 'g', 'd', 'y', ' ', 'I', 'b', 'r', 'a', 'h', 'i', 'm']
console.log(S.split(' ')); // ['Ahmed', 'Magdy', 'Ibrahim']
console.log(S.split('a')); // ['Ahmed M', 'gdy Ibr', 'him']
console.log(S.split('a', 2)); // ['Ahmed M', 'gdy Ibr'] // The second argument is the maximum number of splits

// We can also use the spread operator to split a string into an array of characters

console.log([...S]); // [ 'A', 'h', 'm', 'e', 'd', ' ', 'M', 'a', 'g', 'd', 'y', ' ', 'I', 'b', 'r', 'a', 'h', 'i', 'm' ]