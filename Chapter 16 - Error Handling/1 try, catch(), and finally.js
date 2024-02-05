/*

try, catch, and finally

try     => defines a code block to run (to try).
catch   => defines a code block to handle any error.
finally => defines a code block to run regardless of the result.

try {
  Block of code to try
} catch (err) {
  Block of code to handle errors (err is the caught error)
} finally {
  Block of code to be executed regardless of the try / catch result
}

By default, when an uncought error occurs, JavaScript will normally stop.
But when we catch the error, the program will continue normally.

*/

try {
  const x = 1;
  x = 10; // ERROR HERE => TypeError: Assignment to constant variable.
  console.log('Hello from try block'); // Not executed
} catch (err) {
  console.log('Cought Error:', err); // Cought Error: TypeError: Assignment to constant variable.
} finally {
  console.log('Done'); // Always executed
}

console.log('Hello'); // Executed normally (if we didn't catch the error, the program will stop)
