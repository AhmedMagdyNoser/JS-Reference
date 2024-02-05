/*

Quantifiers

Quantifiers are used to specify how many times a character, group, or character class to be matched.

X? => X occurs one or zero times
X+ => X occurs one or more times
X* => X occurs zero or more times

lazy quantifier: X+? or X*? => force them to match as few X characters as possible

*/

console.log('abc'.match(/a?/g)); // [ 'a', '', '', '' ] (a occurs one or zero times)
console.log('abc'.match(/a+/g)); // [ 'a' ]             (a occurs one or more times)
console.log('abc'.match(/a*/g)); // [ 'a', '', '', '' ] (a occurs zero or more times)

console.log('abc aabb'.match(/ab?/g)); // [ 'ab', 'a', 'ab' ]  (b occurs one or zero times) (consider it /a(b?)/g)
console.log('abc aabb'.match(/ab+/g)); // [ 'ab', 'abb' ]      (b occurs one or more times) (consider it /a(b+)/g)
console.log('abc aabb'.match(/ab*/g)); // [ 'ab', 'a', 'abb' ] (b occurs zero or more times) (consider it /a(b*)/g)

console.log('abc abab'.match(/(ab)?/g)); // [ 'ab', '', '', 'ab', 'ab', '' ] (ab occurs one or zero times)
console.log('abc abab'.match(/(ab)+/g)); // [ 'ab', 'abab' ]                 (ab occurs one or more times)
console.log('abc abab'.match(/(ab)*/g)); // ['ab', '', '', 'abab', '']       (ab occurs zero or more times)

// Note that the ? and * return empty strings if the character, group, or character class doesn't exist (exists zero times).

console.log('c'.match(/ab?/g)); // null         (No 'a' followed by 'b' occuring one or zero times)
console.log('c'.match(/(ab)?/g)); // [ '', '' ] (ab occurs zero times)

// The last '' comes from the way the JavaScript match method works when used with a global flag (g).
// After finding the last 'ab' in the string, it tries to find another match.
// Since there is no more 'ab', it returns an empty string.

// ------------------------------

// The + and * are greedy quantifiers, they try to match as many characters as possible.
// To make them lazy, add a ? after them.

console.log('abc aabb'.match(/ab+/g)); // [ 'ab', 'abb' ] (greedy)
console.log('abc aabb'.match(/ab+?/g)); // [ 'ab', 'ab' ] (lazy)

console.log('b be bee beer'.match(/b\w+/g)); // [ 'be', 'bee', 'beer' ] (greedy)
console.log('b be bee beer'.match(/b\w+?/g)); // [ 'be', 'be', 'be' ] (lazy)

console.log('<h1>hello</h1>'.match(/<.+>/g)); // [ '<h1>hello</h1>' ] (greedy)
console.log('<h1>hello</h1>'.match(/<.+?>/g)); // [ '<h1>', '</h1>' ] (lazy)

// ------------------------------ Other Examples ------------------------------

// Match all these emails:
let emails = `o@nn.sa ahmed@gmail.com ali@gmail.net`;
console.log(emails.match(/\w+@\w+\.\w+/g)); // [ 'o@nn.sa', 'ahmed@gmail.com', 'ali@gmail.net' ]

// ------------------------------

// Match all numbers that start with 0 and end with 0
let nums = `0110 10 150 05120 350 00`;
console.log(nums.match(/0\d*0/g)); // [ '0110', '05120', '00' ]

// ------------------------------

// Match all these urls:
let urls = `https://www.google.com http://www.site.net www.facebook.com facebook.com`;
console.log(urls.match(/(https?:\/\/)?(www\.)?\w+\.\w+/g)); // [ 'https://www.google.com', 'http://www.site.net', 'www.facebook.com', 'facebook.com' ]
