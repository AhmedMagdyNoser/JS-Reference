// Functions Hoisting with 'var'

// Both function expression and arrow function are not hoisted.
// But the variable is hoisted as undefined.

func(); // TypeError: func is not a function (func is undefined)

var func = () => {
  console.log('Hi Function');
};

/*

Explanation:

In the creation phase:
- JS engine will hoist the variable declaration (var func;) as undefined.

In the execution phase:
- The call will throw a TypeError: func is not a function. Because it's hoisted as undefined and not a function yet.

*/
