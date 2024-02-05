/*

JavaScript is a prototype-based language.
Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined.
In Prototype-based programming, it's possible to update objects dynamically at runtime.

*/

const animal = {
  name: 'animal',
  walk() {
    console.log('walking');
  },
};

const bird = {
  fly() {
    console.log('flying');
  },
};

// By default, the parent of an object is the Object.prototype object

// animal >> Object.prototype
// bird >> Object.prototype

console.log(animal.__proto__); // (Object.prototype)
console.log(bird.__proto__); // (Object.prototype)

// __proto__ means the parent (It's pronounced dunder proto)

// ------------------------------------

bird.__proto__ = animal; // set the parent of bird to animal

// bird >> animal >> Object.prototype
// Now bird has access to all the properties of animal

bird.walk(); // walking
bird.fly(); // flying

console.log(bird); // {swim: ƒ}
console.log(bird.__proto__); // {name: 'animal', walk: ƒ} (animal)

console.log(animal.isPrototypeOf(bird)); // true

console.log(animal); // {name: 'animal', walk: ƒ}
console.log(animal.__proto__); // (Object.prototype)
