/*

Metacharacters (aka. character classes escape sequences)

.  => Any character except newline
\. => Any actual dot character (.)
\w => Any alphanumeric character
\W => Any non-alphanumeric character
\d => Any digit character (0-9)
\D => Any non-digit character
\s => Any whitespace character (space, tab, newline)
\S => Any non-whitespace character
\b => Any word boundary character
\B => Any non-word boundary character

*/

// . => Any character except newline
console.log('abc'.match(/./g)); // [ 'a', 'b', 'c' ]
console.log('abc'.match(/../g)); // [ 'ab' ]
console.log('abc'.match(/...../g)); // null (There is no 5 characters in a row)

// \. => Any actual dot character (.)
console.log('abc'.match(/\./g)); // null (There is no any dot character)

// \w => Any alphanumeric character
console.log('abc'.match(/\w/g)); // [ 'a', 'b', 'c' ]
console.log('abc'.match(/\w\w/g)); // [ 'ab' ]

// \W => Any non-alphanumeric character
console.log('abc'.match(/\W/g)); // null (There is no non-alphanumeric character)

// \d => Any digit character (0-9)
console.log('123'.match(/\d/g)); // [ '1', '2', '3' ]
console.log('123'.match(/\d\d/g)); // [ '12' ]

// \D => Any non-digit character
console.log('123'.match(/\D/g)); // null (There is no non-digit character)

// \s => Any whitespace character (space, tab, newline)
console.log('a b c'.match(/\s/g)); // [ ' ', ' ' ]
console.log('a b c'.match(/\s\s/g)); // null (There is no 2 whitespace characters in a row)

// \S => Any non-whitespace character
console.log('a b c'.match(/\S/g)); // [ 'a', 'b', 'c' ]
console.log('a b c'.match(/\S\S/g)); // null (There is no 2 non-whitespace characters in a row)

// \b => Any word boundary character
console.log('abc efg'.match(/\b\w/g)); // [ 'a', 'e' ] (Any character at the beginning of a word)
console.log('abc efg'.match(/\be/g)); // [ 'e' ] (Any 'e' at the beginning of a word)
console.log('abc efg'.match(/\w\b/g)); // [ 'c', 'g' ] (Any character at the end of a word)
console.log('abc efg'.match(/c\b/g)); // [ 'c' ] (Any 'c' at the end of a word)

// \B => Any non-word boundary character
console.log('abc efg'.match(/\B\w/g)); // [ 'b', 'c', 'f', 'g' ] (Any character not at the beginning of a word)
console.log('abc efg'.match(/\w\B/g)); // [ 'a', 'b', 'e', 'f' ] (Any character not at the end of a word)

// ------------------------------

// note how \. and . are different:
let emails = `A@@g.com B@C.net O@S.org D@n.com D@n,com`;
console.log(emails.match(/\w@\w\.(com|net)/g)); // ['B@C.net', 'D@n.com']
console.log(emails.match(/\w@\w.(com|net)/g)); // ['B@C.net', 'D@n.com', 'D@n,com']

// ------------------------------

// Match any word starting or ending with 'spam':
let names = `Sayed 1Spam 2spam 3spam Aspamo spam4 spam5`;
console.log(names.match(/(\bspam.|.spam\b)/gi)); // [ '1Spam', '2spam', '3spam', 'Aspamo', 'spam4', 'spam5' ]

// Of course, there is better ways to do this.