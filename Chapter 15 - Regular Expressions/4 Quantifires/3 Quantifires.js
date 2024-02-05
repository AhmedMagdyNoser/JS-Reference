/*

Quantifiers

Quantifiers are used to specify how many times a character, group, or character class to be matched.

^X => Matches any string that starts with 'X'
X$ => Matches any string that ends with 'X'

*/

let str = `We love JavaScript`;
console.log(str.match(/^we/gi)); // [ 'We' ] (match 'we' at the beginning of the string)
console.log(str.match(/^love/gi)); // null (there is no 'love' at the beginning of the string)
console.log(/^We/gi.test(str)); // true
console.log(/^love/gi.test(str)); // false

console.log(str.match(/JavaScript$/gi)); // [ 'JavaScript' ] (match 'JavaScript' at the end of the string)
console.log(str.match(/love$/gi)); // null (there is no 'love' at the end of the string)
console.log(/JavaScript$/gi.test(str)); // true
console.log(/love$/gi.test(str)); // false

// Notice the difference between ^ and $ in the above example and the \b word boundary.

// \b => Any word boundary character
console.log('abc efg'.match(/\b\w/g)); // [ 'a', 'e' ] (Any character at the beginning of a word)
console.log('abc efg'.match(/\be/g)); // [ 'e' ] (Any 'e' at the beginning of a word)
console.log('abc efg'.match(/\w\b/g)); // [ 'c', 'g' ] (Any character at the end of a word)
console.log('abc efg'.match(/c\b/g)); // [ 'c' ] (Any 'c' at the end of a word)

// ^ and $ are used to match the beginning and the end of the string, not the word.
