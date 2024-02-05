// Destructuring an object with different property names

const obj = {
  firstName: 'John',
  lastName: 'Smith',
};

let { firstName: a } = obj;

console.log(a); // John

// =========================

// Destructuring an object with default values

let { lastName: b, job: c = 'teacher' } = obj;

console.log(b); // Smith
console.log(c); // teacher
