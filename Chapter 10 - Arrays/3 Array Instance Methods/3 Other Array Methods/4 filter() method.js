/*

filter() method
It is used to filter the array items based on the condition.
It returns a new array with the filtered items.

syntax:

array.filter(function(item, index, arr), thisValue)

function : the function to be run for each element in the array.
item     : the current item in the array.
index    : (Optional) the index of the current item.
array    : (Optional) the array itself.

thisArg  : (Optional) the value to use as this when executing callback.

the callback function should return true or false.

*/

// Example 1: Using filter() method to filter the array items.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(item) {
  return item % 2 === 0;
}

let filterArr = arr.filter(isEven);

console.log(filterArr); // [ 2, 4, 6, 8 ]
