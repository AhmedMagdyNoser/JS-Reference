/*

Switch Case

The switch statement is used to perform different actions based on different conditions.

Syntax:

switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // code block
}

*/

let day = 3;

switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Invalid day');
}

// The break keyword is used to break out of the switch block.
