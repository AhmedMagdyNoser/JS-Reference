// Date Instance Methods - Getters and Setters

// ===========================================================================================

// Date getters

const myDate = new Date(); // the date now

console.log('Unix time to this date in UTC:', myDate.getTime()); // unix time

// The next instance methods all are about the local time (not UTC)

console.log('The day of week:', myDate.getDay()); // weekday (Sun = 0, Mon = 1, Tue = 2, ..., Sat = 6)
console.log('The day of month:', myDate.getDate()); // day of month
console.log('The month:', myDate.getMonth()); // month (Jan = 0, Feb = 1, Mar = 2, ..., Dec = 11)
console.log('The year:', myDate.getFullYear()); // year

console.log('Hours:', myDate.getHours());
console.log('Minutes:', myDate.getMinutes());
console.log('Seconds:', myDate.getSeconds());
console.log('Timezone:', myDate.getTimezoneOffset());

// ===========================================================================================

// Also, you can use the setter methods like: myDate.setMonth(5);

// ------------------------------------ (Exercise Below) -------------------------------------

// Display the number of days left in the current year.

// Solution
let lastDay = new Date(myDate.getFullYear(), 11, 31, 23, 59, 59, 999);
console.log(Math.round((lastDay - myDate) / 1000 / 60 / 60 / 24), 'Days Left');
