/*

reduce() method
It returns a single value that is the reduced version of the array.

syntax:

array.reduce(function(total, currentValue, currentIndex, array), initialValue)

function     : the function to be run for each element in the array.
total        : the initialValue, or the previously returned value of the function.
currentValue : the value of the current element.
currentIndex : (Optional) the index of the current item.
array        : (Optional) the array itself.

initialValue : (Optional) the value to be passed to the function as the initial value.

*/

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Example 1:

function sum(total, item) {
  return total + item;
}

let reduceArr = arr.reduce(sum);

console.log(reduceArr); // 45

// Using the initialValue. Notice the difference.

// This example should calculate the sum of the letters positions in the alphabet,
// starting from 1 for 'a', 2 for 'b', and so on.

let withoutInitialValue = ['a', 'b', 'c'].reduce((a, b) => a + b.charCodeAt(0) - 96);
// first step => 'a' + 98 - 96 = NaN

let withInitialValue = ['a', 'b', 'c'].reduce((a, b) => a + b.charCodeAt(0) - 96, 0);
// first step => 0 + 98 - 96 = 2

console.log(withoutInitialValue); // NaN
console.log(withInitialValue); // 6
