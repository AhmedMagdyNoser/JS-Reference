// Object Oriented Programming

// OOP is a paradigm that uses objects and their interactions to design and program applications.

// JavaScript is a prototype-based object-oriented language (not a class-based language like Java or C#).

// OOP in JS is implemented through its prototype-based nature. Objects can inherit directly from other objects.

// OOP in JS is dynamic. You can add, remove, or change methods and properties at any time (even in runtime).

// ------------------------------------

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

const emp1 = new Employee('Ali', 1000);
const emp2 = new Employee('Ahmed', 2000);

console.log(emp1); // {name: "Ali", salary: 1000}
console.log(emp2); // {name: "Ahmed", salary: 2000}

emp1.work(); // Ali is working
emp2.work(); // Ahmed is working

console.log(emp1.__proto__); // Employee.prototype
console.log(emp2.__proto__); // Employee.prototype

console.log(emp1 instanceof Employee); // true
console.log(emp2 instanceof Employee); // true

// emp1 >> Employee.prototype
// emp2 >> Employee.prototype
