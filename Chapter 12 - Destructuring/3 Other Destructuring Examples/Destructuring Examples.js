// Destructuring Examples

// Destructuring an object with nested arrays

const student = {
  firstName: 'John',
  lastName: 'Smith',
  strengths: ['Music', 'Art'],
};

let {
  strengths: [firstStrength, secondStrength],
} = student;

console.log(firstStrength); // Music
console.log(secondStrength); // Art

// =========================

// Destructuring an array with nested objects

const students = [
  {
    firstName: 'John',
    lastName: 'Smith',
    strengths: ['Music', 'Art'],
  },
  {
    firstName: 'Sara',
    lastName: 'Watson',
    strengths: ['Math', 'Design'],
  },
];

let [
  {
    strengths: [firstStrength1, secondStrength1],
  },
  {
    strengths: [firstStrength2, secondStrength2],
  },
] = students;

console.log(firstStrength1); // Music
console.log(secondStrength1); // Art
console.log(firstStrength2); // Math
console.log(secondStrength2); // Design
