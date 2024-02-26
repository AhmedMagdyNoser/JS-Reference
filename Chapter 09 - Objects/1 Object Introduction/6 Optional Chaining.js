/* 

Optional Chaining ?.

The optional chaining (?.) operator accesses an object's property.
If the object accessed is undefined or null, the expression evaluates to undefined instead of throwing an error.

*/

const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

console.log(adventurer.dog?.name); // undefined
// console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')

// It's something like:
console.log(adventurer.dog && adventurer.dog.name); // undefined

// It can also be used with methods:
console.log(adventurer.run?.()); // undefined
// console.log(adventurer.run()); // TypeError: adventurer.run is not a function
