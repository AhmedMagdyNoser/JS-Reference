// for-in Loops

/*

for-in Loop Syntax:
for-in loops are used to loop through the properties of an object.

for (variable in object) {
  code block to be executed
}

*/

// ===========================================================================================

// Example to print all properties of an Object:

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
};

// Instead of using Object.keys(person) with traditional for loop, you can use for-in loop:

for (let key in person) {
  console.log(key, person[key]);
}
