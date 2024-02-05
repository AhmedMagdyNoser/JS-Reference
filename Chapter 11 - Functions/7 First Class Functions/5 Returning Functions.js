// 3. A function can be returned by another function.

function createMultiplierFunction(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = createMultiplierFunction(3);

console.log(triple(5)); // 15
