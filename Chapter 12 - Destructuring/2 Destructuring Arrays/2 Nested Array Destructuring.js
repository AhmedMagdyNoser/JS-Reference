// Nested array destructuring

let nestedArr = [1, 2, 3, [4, 5]];

let [i, , , [j, k]] = nestedArr;

console.log(i); // 1
console.log(j); // 4
console.log(k); // 5
