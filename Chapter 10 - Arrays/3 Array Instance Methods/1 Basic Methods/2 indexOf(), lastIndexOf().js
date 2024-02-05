// indexOf() and lastIndexOf() methods

const A = ['Ahmed', 'Magdy', 'Ibrahim'];

console.log(A.indexOf('Ahmed')); // 0
console.log(A.indexOf('Magdy')); // 1
console.log(A.indexOf('Ibrahim')); // 2
console.log(A.indexOf('Noser')); // -1 (means not found)
console.log(A.indexOf('A')); // -1 (means not found)
console.log(A.indexOf('Magdy', 2)); // -1 (means not found). The second argument is the index to start searching from

console.log(A.lastIndexOf('Ahmed')); // 0
