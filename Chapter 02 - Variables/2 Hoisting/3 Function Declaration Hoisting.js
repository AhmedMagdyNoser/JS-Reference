// Function Declaration Hoisting

func(); // Hi Function

function func() {
  console.log('Hi Function');
}

/*

Explanation:

Function Declaration are accessible from anywhere in the code.

In the creation phase:
- JS engine will hoist the function declaration (function func();) as it is.

In the execution phase:
- The function will be called simply and print 'Hi Function'.

*/