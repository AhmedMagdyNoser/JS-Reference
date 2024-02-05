/*

forEach() method
It is used to iterate over the array items.
It does not return anything.

syntax:

array.forEach(function(item, index, arr), thisValue)

function : the function to be run for each element in the array.
item     : the current item in the array.
index    : (Optional) the index of the current item.
array    : (Optional) the array itself.

thisArg  : (Optional) the value to use as this when executing callback.

*/

// Example 1: Using forEach() method to iterate over the array items.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function printItem(item) {
  console.log(item);
}

arr.forEach(printItem); // 1 2 3 4 5 6 7 8 9
