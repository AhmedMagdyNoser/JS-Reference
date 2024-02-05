/*

Regular Expressions
It is a sequence of characters that forms a search pattern.

syntax:

let re = /pattern/flags;
let re = new RegExp("pattern", "flags")

flags (modifiers):
  i => case-insensitive => (ignore case)
  g => global           => (find all matches)

methods (RegExp object):
test() method returns true if there is a match and false otherwise.

methods (String object):
match() method returns an array of matches or null if not found.
replace() method returns a new string with some or all matches of a pattern.

*/

// test() method
console.log(/ahmed/gi.test('Ahmed Magdy')); // true (There is 'ahmed' in the string)
console.log(/ahmed/gi.test('Mazen Magdy')); // false (There is no 'ahmed' in the string)

// ------------------------------

let str = 'Ahmed Magdy ahmed magdy Ahmed Magdy ahmed magdy';

// match() method
console.log(str.match(/ahmed/)); // ahmed (The first 'ahmed')
console.log(str.match(/ahmed/i)); // Ahmed (The first 'Ahmed' or 'ahmed')
console.log(str.match(/ahmed/g)); // [ 'ahmed', 'ahmed' ] (All 'ahmed')
console.log(str.match(/ahmed/gi)); // [ 'Ahmed', 'ahmed', 'Ahmed', 'ahmed' ] (All 'Ahmed' and 'ahmed')

// replace() method
console.log(str.replace(/ahmed/i, 'Ali')); // Ali Magdy ahmed magdy Ahmed Magdy ahmed magdy
console.log(str.replace(/ahmed/gi, 'Ali')); // Ali Magdy Ali magdy Ali Magdy Ali magdy
// Note that the replace() method can take a function as the second argument
console.log(
  str.replace(/magdy/i, (match, offset, string) => {
    console.log(`${match} is matched at ${offset} in ${string}`); // Magdy is matched at 6 in Ahmed Magdy ahmed magdy Ahmed Magdy ahmed magdy
    return match.toUpperCase();
  })
); // Ahmed MAGDY ahmed magdy Ahmed Magdy ahmed magdy

// ------------------------------

let pattern = /ahmed/gi;

console.log(pattern); // /ahmed/gi
console.log(pattern.source); // ahmed
console.log(pattern.flags); // gi
console.log(pattern.global); // true
console.log(pattern.ignoreCase); // true
