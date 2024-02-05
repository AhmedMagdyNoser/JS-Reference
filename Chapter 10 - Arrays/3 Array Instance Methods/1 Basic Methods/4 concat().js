// concat() method

const A1 = ['Ahmed', 'Magdy', 'Ibrahim'];
const A2 = ['Abdelrazek', 'Hassan', 'Mohamed'];

// The concat() method takes one or more arguments: the arrays to concatenate
console.log(A1.concat(' is a software engineer')); // ['Ahmed', 'Magdy', 'Ibrahim', 'is a software engineer']
console.log(A1.concat(['is', 'a', 'software', 'engineer'])); // ['Ahmed', 'Magdy', 'Ibrahim', 'is', 'a', 'software', 'engineer']

console.log(A1.concat(A2)); // ['Ahmed', 'Magdy', 'Ibrahim', 'Abdelrazek', 'Hassan', 'Mohamed']

// ===========================================================================================

// Another way to concatenate arrays is by using the spread operator

console.log([...A1, ...A2]); // ['Ahmed', 'Magdy', 'Ibrahim', 'Abdelrazek', 'Hassan', 'Mohamed']
