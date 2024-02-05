// Different ways to create dates

const myDate = new Date(); // the date now

console.log('Date and time in UTC:', myDate); // date in detail (2023-10-18T05:35:45.000Z)
// 2023-10-18    => is the Date
// T             => is a separator between date and time
// 05:35:45.000  => is the time
// Z             => specifies that the timezone is UTC

// ===========================================================================================

// All the following set the date in your local timezone execpt the third (date3 is set in UTC)

const date1 = new Date(404344800000); // Unix time to 25 Oct 1982
const date2 = new Date('1982 10 25');
const date3 = new Date('1982-10-25'); // IMPORTANT: this uses the timezone UTC
const date4 = new Date('1982-10-25T00:00:00.000+02:00'); // Time and timezone added manualy here.
const date5 = new Date(1982, 9, 25); // In this case, 9 is for Oct.
const date6 = new Date(1982, 9, 25, 0, 0, 0); // In this case, 9 is for Oct. Time add here.

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);
console.log(date6);
