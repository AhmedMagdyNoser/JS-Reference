// Recursion

// Recursion is when a function calls itself until it doesn't.

// 1.No Tail Recursion

function factorial(n) {
  if (n === 1) return 1; // base case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// =========================

// 2.Tail Recursion

// Tail Recursion is better because it doesn't need to store the stack.
// It uses the return value of the recursive call itself.

function factorial(n, a = 1) {
  if (n === 1) return a; // base case
  return factorial(n - 1, n * a);
}

console.log(factorial(5)); // 120
