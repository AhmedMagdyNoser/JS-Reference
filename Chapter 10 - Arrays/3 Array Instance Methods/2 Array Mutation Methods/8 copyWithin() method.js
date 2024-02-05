let A = ['A', 'B', 'C', 'D', 'E', 'F'];

// The copyWithin() copies a section of the array to the same array starting at position target.
// It returns a reference to the same array.

A.copyWithin(0, 2, 4); // [ 'C', 'D', 'C', 'D', 'E', 'F' ]

// This means that: In the index 0, items from the index 2 to the index 4 (without the end) will be copied
