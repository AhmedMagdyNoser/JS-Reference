// Hoising with 'let' or 'const'

console.log(msg); // ReferenceError: Cannot access 'msg' before initialization (msg is in the TDZ in these lines)

let msg = 'Hello World';

/*

Explanation:

In the creation phase:
- JS engine will hoist the variable declaration (let msg;) as <unintialized>.

In the execution phase: 
- console.log() will throw an error: ReferenceError: Cannot access 'msg' before initialization.

*/

// ----------------------------------------------

console.log(NewMsg); // ReferenceError: NewMsg is not defined

// Notice that the error is different from the previous one because the variable NewMsg is not declared at all.