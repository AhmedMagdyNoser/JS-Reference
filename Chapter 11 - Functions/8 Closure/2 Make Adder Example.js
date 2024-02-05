// Make a function that adds a given value with an argument passed in the closure

function makeAdder(x) {
  return function (y) {
    return x + y; // x is declared in the parent function
  };
}

let add5 = makeAdder(5);
let add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12
