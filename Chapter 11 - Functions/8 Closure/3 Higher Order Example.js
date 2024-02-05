// Trace the code below.

function func() {
  let grandpa = 'grandpa';
  return function () {
    let father = 'father';
    return function () {
      let son = 'son';
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

let one = func();
let two = one();
let three = two();

console.log(three); // grandpa > father > son

// or simply:
console.log(func()()()); // grandpa > father > son