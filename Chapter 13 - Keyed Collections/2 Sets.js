/*

Sets

Sets are a new object type with ES6 that allow us to create collections of unique values.
A Set is a collection of values where each value may occur only once.
A value in a Set can be anything (objects and primitive values).

Instance Properties: size
Instance Methods:    add(), delete(), has(), forEach(), clear()

*/

const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(3); // This will be ignored because 3 is already in the Set

console.log(mySet); // Output: {size: 3, 1, 2, 3}
console.log(mySet.size); // Output: 3

console.log(mySet.delete(2)); // Output: true

console.log(mySet.has(2)); // Output: false

// Iterate over the elements in the Set
mySet.forEach((value) => {
  console.log(value);
}); // Output: 1 3

// Clear all elements from the Set
mySet.clear();

// ===========================================================================================

let arr = [1, 1, 1, 2, 3];

// Create a new Set from an array
let set = new Set(arr);

console.log(set); // Output: {size: 3, 1, 2, 3} (unique values)
