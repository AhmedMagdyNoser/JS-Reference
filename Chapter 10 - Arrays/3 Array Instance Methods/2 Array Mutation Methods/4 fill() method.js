let A = ['Ahmed', 'Magdy', 'Ibrahim'];

// The fill() changes all array elements to a static value and returns a reference to the same array.
A.fill('X'); // ['X', 'X', 'X']

// // To fill the array with a specific value from a specific index to a specific index (without the end)
A.fill('Y', 0, 2); // ['Y', 'Y', 'X']
