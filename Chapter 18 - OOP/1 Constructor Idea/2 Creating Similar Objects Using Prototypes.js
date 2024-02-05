// We can solve this problem using prototypes

// By creating a parent object with getName() function and then inheriting from it

let userObj = {
  getName() {
    return `My name is ${this.name}`;
  },
};

// Now we can create users like this:
function user(name, age) {
  return Object.create(userObj, { name: { value: name }, age: { value: age } });
  // Each user will inherit from userObj
}

let user1 = user('Ahmed', 30);
let user2 = user('Ali', 20);
let user3 = user('Mohamed', 25);

console.log(user1); // {name: 'Ahmed', age: 30}
console.log(user2); // {name: 'Ali', age: 20}
console.log(user3); // {name: 'Mohamed', age: 25}

console.log(user1.__proto__); // {getName: ƒ} // this is the prototype

// All users inherit the getName function from the user prototype

// This takes us to the constructor idea
