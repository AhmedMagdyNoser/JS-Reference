// for Loop

/*

for Loop Syntax:
for loops are used to execute a block of code a certain number of times.

for (Initialization; Condition; Increment) {
  code block to be executed
}

Initialization : is executed before the execution of the code block.
Condition      : is the condition for executing the code block.
Increment      : is executed every time after the code block has been executed.


*/

// ===========================================================================================

// Simple Example:

// The for loop below loops through the numbers 0 to 9.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// 'i' is called the loop variable. It is used to count the iterations of the loop.

// ===========================================================================================

// Example to print all characters in a String:

let str = 'Hello!';

// for loop
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// ===========================================================================================

// Example to print all elements in an Array:

let arr = ['A', 'B', 'C', 'D', 'E'];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// ===========================================================================================

// Example to filter an Array:

let mixedArray = [1, 2, 3, 'A', 'B', 'C', 4, 5, 'D', 'E'];

for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === 'number') console.log(mixedArray[i]);
}

// ===========================================================================================

// Example to print all properties of an Object:

let person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
};

console.log(Object.keys(person)); // ['firstName', 'lastName', 'age']

for (let i = 0; i < Object.keys(person).length; i++) {
  console.log(Object.keys(person)[i], person[Object.keys(person)[i]]);
}
