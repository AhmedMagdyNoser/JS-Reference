// Make a variable for counting something.

// You could use a global variable, and a function to increase the counter:

let testCounter = 0;

function increment() {
  testCounter += 1;
}

increment();
increment();
increment();

// But the problem is that: Any code can change the testCounter, without calling increment().
// The testCounter should be local to the increment() function, to prevent other code from changing it.

// ---------------------------------------------

// let's use closure to solve this problem:

let add = (() => {
  let counter = 0;
  // We garantee that the counter is declared only once.
  // And it is not accessible from outside the function.

  return () => {
    counter += 1;
    return counter;
  };
})();

add();
add();
add();

// Now, the add() is the only function that can access the counter variable.
