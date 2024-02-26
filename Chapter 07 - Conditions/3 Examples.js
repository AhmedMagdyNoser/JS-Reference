// Examples

// Differences between null, undefined, '', 0, NaN, false, true, [], {} in conditions?

undefined ? console.log(true) : console.log(false); // false
null ? console.log(true) : console.log(false); // false
NaN ? console.log(true) : console.log(false); // false
'' ? console.log(true) : console.log(false); // false
0 ? console.log(true) : console.log(false); // false
false ? console.log(true) : console.log(false); // false
true ? console.log(true) : console.log(false); // true
[] ? console.log(true) : console.log(false); // true
({}) ? console.log(true) : console.log(false); // true

// All values are truthy except the falsy values: false, 0, "", null, undefined, NaN, -0, 0n, and document.all.

// ----------------------------------------------

// if .. in

var obj = {
  name: 'JavaScript',
  founder: 'Brendan Eich',
  ranking: 1,
};

if ('age' in obj) {
  console.log('yes');
}

let arr = [1, 2, 3, 4, 5];

if (3 in arr) {
  console.log('yes');
}
