// Array Destructuring

// Destructuring is a way to unpack values from arrays, or properties from objects, into distinct letiables.

let user = ['John', 26];

// ES5
let userName = user[0]; // John
let userAge = user[1]; // 26

// ES6
const [userNameDes, userAgeDes] = user;

console.log(userNameDes); // John
console.log(userAgeDes); // 26

// =========================

let friends = ['Ahmed', 'Ali', 'Sayed', 'Samir'];

let [friend1, , friend3] = friends;

console.log(friend1); // Ahmed
console.log(friend3); // Sayed
