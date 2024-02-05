/*

Quantifiers

Quantifiers are used to specify how many times a character, group, or character class to be matched.

?= => Matches any string that is followed by a specific string 'X'
?! => Matches any string that is not followed by a specific string 'X'

*/

let names = `1AhmedX 2GamalX 3Osama 4Mazen`;

// match any word that is followed by 'X'
console.log(names.match(/\d\w{5}(?=X)/g)); // [ '1Ahmed', '2Gamal' ]

// match any word that is not followed by 'X'
console.log(names.match(/\d\w{5}(?!X)/g)); // [ '3Osama', '4Mazen' ]
