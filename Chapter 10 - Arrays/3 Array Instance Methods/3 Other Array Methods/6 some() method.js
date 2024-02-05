/*

some() method
It is used to check if any of the array items satisfy the condition.
It returns true if any of the items satisfy the condition, otherwise false.

syntax:

array.some(function(item, index, array), thisValue)

function     : the function to be run for each element in the array.
item         : The value of the current element.
index        : (Optional) the index of the current item.
array        : (Optional) the array itself.

thisArg      : (Optional) the value to use as this when executing callback.

*/

// Example 1: Using some() method to check if any of the array items satisfy the condition.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(item) {
  return item % 2 === 0;
}

let someArr = arr.some(isEven);

console.log(someArr); // true
