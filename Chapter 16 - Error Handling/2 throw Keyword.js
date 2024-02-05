/*

throw => defines a custom error

*/

let x = 0;

try {
  if (x === '') throw 'It is empty'; // throw an error (caught by the catch block)
  if (x === 0) throw new Error('It is zero'); // throw an error (caught by the catch block). The Error object helps you identify when and where your code breaks and (among other things) to debug it.
} catch (err) {
  console.log('caught Error:', err);
}
