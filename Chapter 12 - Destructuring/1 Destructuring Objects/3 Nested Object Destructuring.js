// Destructuring an object with nested objects

const obj = {
  firstName: 'John',
  lastName: 'Smith',
  job: {
    title: 'teacher',
    level: 'senior',
  },
};

// The same as destructuring nested array but with the name of the object

let {
  job: { title, level },
} = obj;

console.log(title); // teacher
console.log(level); // senior

// with different property names

let {
  job: { title: jobTitle, level: jobLevel },
} = obj;

console.log(jobTitle); // teacher
console.log(jobLevel); // senior

// Or simply

let { title: jobTitleSimply, level: jobLevelSimply } = obj.job;

console.log(jobTitleSimply); // teacher
console.log(jobLevelSimply); // senior