/*

Disjunction

The disjunction operator is used to match one of several expressions.
It is represented by the pipe character (|).

(X|Y) => X or Y
(X|Y|Z) => X, Y, or Z

The last two can also be used to match word not just characters. For example: (edu|org|io)

*/

console.log('com net org edu io'.match(/(edu|org|io)/i)); // [ 'org' ] (The first 'org' or 'edu' or 'io')
console.log('com net org edu io'.match(/(edu|org|io)/gi)); // [ 'org', 'edu', 'io' ] (All 'org' or 'edu' or 'io')
