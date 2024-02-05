// Function Object

// In JS, functions are objects, they can have properties and methods.

// There are two ways to create a function in JS.

// The Function object is a constructor for creating function objects.
const func1 = new Function('x', 'y', 'return x + y'); // (not recommended)

const func2 = (x, y) => x + y;

function func3(x, y) {
  return x + y;
}
console.log(func1); // ƒ (x, y) { return x + y }
console.log(func2); // ƒ (x, y) => x + y
console.log(func3); // ƒ func3(x, y) { return x + y }

// ------------------------------------

console.log(Function); // ƒ Function() { [native code] }

// The [native code] placeholder is shown when you log built-in JavaScript functions or constructors like `Function`.
// This is because the actual code of these functions is not written in JavaScript but in lower-level code within the JavaScript engine itself
// (like C++ in the case of V8, the JavaScript engine in Chrome and Node.js).

// This lower-level code is referred to as "native code", hence the placeholder `[native code]`.
