// static keyword

// Static properties are properties that are accessed directly on the class itself, not on an instance of the class.
// Static methods are methods that are called on the class itself, not on an instance of the class.

class User {
  static className = 'UserClass';
  static sayHiClass() {
    console.log('Hello from User class');
  }
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHiInstance() {
    console.log(`Hi ${this.name}`);
  }
}

// Static properties are in the User function itself
console.dir(User); // { length: 2, name: "User", className: "UserClass", sayHiClass: ƒ, ...}
console.log(User.prototype); // {constructor: ƒ, sayHiInstance: ƒ}

// ------------------------------------

const user1 = new User('Ahmed', 30);

user1.sayHiInstance(); // Hi Ahmed
User.sayHiClass(); // Hello from User class

// user1.sayHiClass(); // TypeError: user1.sayHiClass is not a function
// User.sayHiInstance(); // TypeError: User.sayHiInstance is not a function

// ====================================

// Application of static properties

// We need to create a property that counts the number of employees.

class Employee {
  static count = 0;
  constructor(name) {
    this.name = name;
    Employee.count++;
  }
}

const emp1 = new Employee('Ahmed');
const emp2 = new Employee('Ali');
const emp3 = new Employee('Mohamed');

console.log(Employee.count); // 3
