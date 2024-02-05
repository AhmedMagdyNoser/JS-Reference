// Functions Hoisting with 'let' or 'const'

// Both function expression and arrow function are not hoisted.
// But the variable is hoisted as <uninitialized>.

func(); // ReferenceError: Cannot access 'func' before initialization (func is in the TDZ in these lines)

const func = () => {
  console.log('Hi Function');
};

/*

Explanation:

In the creation phase:
- JS engine will hoist the variable (const func;) as <uninialized>.

In the execution phase:
- The call will throw a ReferenceError: Cannot access 'func' before initialization. Because it's in the TDZ (Temporal Dead Zone).

*/
