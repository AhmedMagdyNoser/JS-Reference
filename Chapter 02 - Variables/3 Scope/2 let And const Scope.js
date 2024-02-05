// 'let' and 'const' Scope

// 'let' and 'const' are block scoped

{
  let x = 10;
}

function test() {
  let y = 10;
}

console.log(x + 5); // ReferenceError: x is not defined
console.log(y + 5); // ReferenceError: y is not defined
