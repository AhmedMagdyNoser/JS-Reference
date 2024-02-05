// do while loops

/*

do while Loops Syntax:

do while loops are used to execute a block of code as long as a specified condition is true.

do {
  code block to be executed
} while (condition);

*/

// ===========================================================================================

// Simple Example:

// The do while loop below loops through the numbers 0 to 9.

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

// ===========================================================================================

// Example to execute the code block at least once

// As the code block is executed before the condition is tested, It will always be executed at least once, even if the condition is false.

do {
  console.log('OK');
} while (false);
