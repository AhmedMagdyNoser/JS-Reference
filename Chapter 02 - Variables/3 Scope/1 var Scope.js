// 'var' Scope

// It's globally scoped when it's outside a function block.
// It's function scoped when it's inside a function block.
// It's not blocked scoped when it's inside a block statement.

{
  var x = 10; // global scope
}

function test() {
  var y = 10; // function scope
}

console.log(x + 5); // 15
console.log(y + 5); // ReferenceError: y is not defined