// Polymorphosim

// Polymorphism is the ability to treat objects of different types in a similar way.

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log('Generic Animal Sound');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound() { // Overriding the parent method
    console.log('Woof Woof');
  }
}

const myAnimal = new Animal('myAnimal');
const myDog = new Dog('myDog');

myAnimal.makeSound(); // Generic Animal Sound
myDog.makeSound(); // Woof Woof
