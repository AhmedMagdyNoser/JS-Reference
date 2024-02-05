// break and continue statements.

// ===========================================================================================

// break Statement

// The break statement "jumps out" of a loop.

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break; // i = 3 breaks out of the loop.
  }
  console.log(i);
}

// This will print 0, 1, 2.

// ===========================================================================================

// continue Statement

// The continue statement "jumps over" one iteration in the loop.

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // i = 3 is skipped.
  }
  console.log(i);
}

// This will print 0, 1, 2, 4, 5, 6, 7, 8, 9.

// ===========================================================================================

// break Statement in Nested Loops

// The break statement in nested loops jumps out of the inner loop.

console.log('i', 'j');

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break; // j = 1 breaks out of the inner loop.
    }
    console.log(i, j);
  }
}

// ===========================================================================================

// continue Statement in Nested Loops

// The continue statement in nested loops skips the current iteration of the inner loop.

console.log('i', 'j');

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) {
      continue; // j = 1 is skipped.
    }
    console.log(i, j);
  }
}

// ===========================================================================================

// labeled break Statement

// The labeled break statement breaks out of a labeled loop.

console.log('i', 'j');

outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (j === 1) {
      break outerLoop; // breaks out of outerLoop.
    }
    console.log(i, j);
  }
}
