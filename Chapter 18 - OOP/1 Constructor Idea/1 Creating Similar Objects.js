// Imagine we want a function to create users, each with a name, an age and a function to get the name.

// We can do it like this:
function user(name, age) {
  return {
    name,
    age,
    getName() {
      return `My name is ${this.name}`;
    },
  };
}

const user1 = user('Ahmed', 30);
const user2 = user('Ali', 20);
const user3 = user('Mohamed', 25);

console.log(user1); // {name: 'Ahmed', age: 30, getName: ƒ}
console.log(user2); // {name: 'Ali', age: 20, getName: ƒ}
console.log(user3); // {name: 'Mohamed', age: 25, getName: ƒ}

// The problem here is that we have copied the getName() function to each user object, which is not efficient.
