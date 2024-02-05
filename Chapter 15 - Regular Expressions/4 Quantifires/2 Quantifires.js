/*

Quantifiers

Quantifiers are used to specify how many times a character, group, or character class to be matched.

{X}   => X occurs exactly X times
{X,Y} => X occurs at least X times and at most Y times
{X,}  => X occurs at least X times

lazy quantifier: {X,Y}? or {X,}? => force them to match as few characters as possible

*/

console.log('aaabca'.match(/a{2}/g)); // [ 'aa' ]

console.log('aaabca'.match(/a{1,3}/g)); // [ 'aaa', 'a' ] (greedy)
console.log('aaabca'.match(/a{1,3}?/g)); // [ 'a', 'a', 'a', 'a' ] (lazy)
console.log('aaabca'.match(/a{0,3}/g)); // ['aaa', '', '', 'a', ''] (greedy)
console.log('aaabca'.match(/a{0,3}?/g)); // [ '', '', '', '', '', '', '', ] (lazy)

// The empty strings '' come when 'a' doesn't exist (exists zero times)
// the last '' comes from the way the JavaScript match method works when used with a global flag (g). (recap)

console.log('aaabca'.match(/a{2,}/g)); // [ 'aaa' ] (greedy)
console.log('aaabca'.match(/a{2,}?/g)); // [ 'aa' ] (lazy)

// ------------------------------

let serials = 's111s s1111s s11111s s111111s';

console.log(serials.match(/s\d{4}s/g)); // [ 's1111s' ]
console.log(serials.match(/s\d{4,5}s/g)); // [ 's1111s', 's11111s' ]
console.log(serials.match(/s\d{4,}s/g)); // [ 's1111s', 's11111s', 's111111s' ]
