let A = ['A', 'B', 'C', 'D'];

// The splice() removes elements from an array and, inserts new elements in their place, returning the deleted elements.

A.splice(0, 1, 'X', 'Y'); // [ 'X', 'Y', 'B', 'C', 'D' ]

// This means that: In the index 0, 1 item will be deleted, and 'X', 'Y' are added instead.
