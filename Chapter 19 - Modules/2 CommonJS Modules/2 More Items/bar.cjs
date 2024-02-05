const foo = require("./foo.js");

console.log(foo.sum(3, 2)); // 5
console.log(foo.sub(3, 2)); // 1

// ================== OR (Destructuring) ==================

const { sum, sub } = require("./foo.js");

console.log(sum(3, 2)); // 5
console.log(sub(3, 2)); // 1
