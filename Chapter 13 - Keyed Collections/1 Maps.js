/*

Maps

Maps are a data structure that associate values (keys) with other values.
That sounds a lot like what objects do, and they are indeed similar.
The main difference is that maps allow keys of any type, not just strings.

Instance Properties: size
Instance Methods:    set(), get(), delete(), has(), forEach(), clear()

*/

// Create a new Map
const myMap = new Map([
  ['name', 'Ahmed'], // [key, value] same as name: 'Ahmed'
  ['age', 25], // [key, value] same as age: 25
]);

// Add elements to the Map
myMap.set('isStudent', true); // same as isStudent: true
myMap.set('hobbies', ['JavaScript', 'PHP', 'Python']);
myMap.set('address', { city: 'Cairo', country: 'Egypt' });

console.log(myMap); // Output: {size: 5, name => "Ahmed", age => 25, isStudent => true, hobbies => Array(3), …}
console.log(myMap.size); // Output: 5

console.log(myMap.get('name')); // Output: Ahmed
console.log(myMap.get('address').city); // Output: Cairo

console.log(myMap.delete('isStudent')); // Output: true

console.log(myMap.has('age')); // Output: true

// Iterate over the elements in the Map
myMap.forEach((value, key) => {
  console.log(`${key} => ${value}`);
});

// Clear all elements from the Map
myMap.clear();

// ===========================================================================================

let obj = {
  name: 'Ahmed',
  age: 25,
  isStudent: true,
  hobbies: ['JavaScript', 'PHP', 'Python'],
  address: {
    city: 'Cairo',
    country: 'Egypt',
  },
};

// Create a new Map from an object
let map = new Map(Object.entries(obj)); // Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

console.log(map); // Output: {size: 5, name => "Ahmed", age => 25, isStudent => true, hobbies => Array(3), …}
