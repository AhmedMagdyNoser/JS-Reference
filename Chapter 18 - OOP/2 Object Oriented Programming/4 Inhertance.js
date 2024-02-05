// Inheritance

// Inheritance is a way to create a class as a specialized version of one or more classes (called base classes).

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  work() {
    console.log(`${this.name} is working`);
  }
}

// We can inherit from Employee class using extends keyword

class Manager extends Employee {
  constructor(name, age, permissions) {
    super(name, age); // super() calls the parent constructor
    this.permissions = permissions;
  }
  plan() {
    console.log(`${this.name} is planning`);
  }
}

// ------------------------------------

console.log(Employee.prototype); // {constructor: ƒ, work: ƒ}
console.log(Manager.prototype); // {constructor: ƒ, plan: ƒ}
console.log(Manager.prototype.__proto__); // {constructor: ƒ, work: ƒ}

// Manager.prototype >> Employee.prototype >> Object.prototype

// ------------------------------------

const manager1 = new Manager('Ahmed', 30, ['add', 'delete']);

// manager1 >> Manager.prototype >> Employee.prototype >> Object.prototype

manager1.work(); // Ahmed is working
manager1.plan(); // Ahmed is planning

// ------------------------------------

console.log(manager1 instanceof Manager); // true
console.log(manager1 instanceof Employee); // true
console.log(manager1 instanceof Object); // true
