// Hoising with 'var'

console.log(msg); // undefined

var msg = 'Hello World';

console.log(msg); // Hello World

/*

Explanation:

In the creation phase, the JS engine will hoist the variable declaration (var msg;) as undefined.

In the execution phase: 
the first console.log() will print undefined.
the variable will be assigned to 'Hello World'.
the second console.log() will print the value of the variable (Hello World).

*/