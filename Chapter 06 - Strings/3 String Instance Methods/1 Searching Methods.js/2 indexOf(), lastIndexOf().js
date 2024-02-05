// indexOf() and lastIndexOf() methods

const S = 'Ahmed Magdy Ibrahim';

// indexOf()

console.log(S.indexOf('Ahmed')); // 0
console.log(S.indexOf('Magdy')); // 6
console.log(S.indexOf('Ibrahim')); // 12

console.log(S.indexOf('Magdy', 9)); // -1 (means not found). The second argument is the index to start searching from

console.log(S.indexOf('A')); // 0
console.log(S.indexOf('a')); // 7
console.log(S.indexOf('a', 8)); // 15 (The second argument is the index to start searching from)

// lastIndexOf()

console.log(S.lastIndexOf('a')); // 15
console.log(S.lastIndexOf('a', 14)); // 7 (The second argument is the index to start searching from)
