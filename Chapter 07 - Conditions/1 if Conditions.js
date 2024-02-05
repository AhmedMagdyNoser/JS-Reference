// if Conditions

// ===========================================================================================

// Basic if condition

let price = 100;
let discount = true;

if (discount === true) {
  // or simply, if (discount)
  price = price - 25;
} else {
  console.log('No discount');
}

console.log(price);

// ===========================================================================================

// Nested if condition

let male = true;
let age = 25;

if (male) {
  if (age >= 18) console.log('Allowed');
  else console.log('Not Allowed');
} else {
  console.log('Not Allowed');
}

// ===========================================================================================

// if .. in

// It is used to check if a property exists in an object.

let obj = {
  name: 'JavaScript',
  estd: '1995',
  ranking: 1,
};

if ('name' in obj) {
  console.log(obj['name']);
}

if ('age' in obj) {
  console.log(obj['age']);
}
