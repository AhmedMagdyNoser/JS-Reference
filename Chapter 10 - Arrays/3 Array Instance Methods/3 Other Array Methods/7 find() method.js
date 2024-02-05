/*

find() method
It is used to find the first item that satisfies the condition.

syntax:

array.find(function(item, index, array), thisValue)

function     : the function to be run for each element in the array.
item         : The value of the current element.
index        : (Optional) the index of the current item.
array        : (Optional) the array itself.

thisArg      : (Optional) the value to use as this when executing callback.

*/

// Example 1: Using find() method to find the first item that satisfies the condition.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(item) {
  return item % 2 === 0;
}

let findArr = arr.find(isEven);

console.log(findArr); // 2
