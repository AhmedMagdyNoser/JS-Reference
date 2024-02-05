/*

map() method
It is used to transform the array items.
It returns a new array with the transformed items.

syntax:

array.map(function(item, index, array), thisValue)

function : the function to be run for each element in the array.
item     : the current item in the array.
index    : (Optional) the index of the current item.
array    : (Optional) the array itself.

thisArg  : (Optional) the value to use as this when executing callback.

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Example 1:

function duplicate(item) {
  return item * 2;
}

let mapArr1 = arr.map(duplicate);

console.log(mapArr1); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

// Example 2:

function OddToZero(item) {
  return item % 2 === 0 ? item : 0;
}

let mapArr2 = arr.map(OddToZero);

console.log(mapArr2); // [ 0, 2, 0, 4, 0, 6, 0, 8, 0 ]
