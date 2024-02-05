/*

Ranges

[A-Z] => Any character between A and Z
[^A-Z] => Any character except A and Z

[a-z] => Any character between a and z
[^a-z] => Any character except a and z

[0-9] => Any digit between 0 and 9
[^0-9] => Any character except a digit

[A-Za-z0-9] => Any alphanumeric character
[^A-Za-z0-9] => Any non-alphanumeric character

[XYZ] => Any character X or Y or Z
[^XYZ] => Any character except X or Y or Z

(^ ignores all after it)

*/

console.log('123456789'.match(/[0-6]/g)); // [ '1', '2', '3', '4', '5', '6' ] (All digits between 0 and 6)
console.log('123456789'.match(/[^0-6]/g)); // [ '7', '8', '9' ] (All digits except digits between 0 and 6)

let myTest = 'ABCabc123!@#';
console.log(myTest.match(/[a-z]/g)); // [ 'a', 'b', 'c' ]
console.log(myTest.match(/[^A-Z]/g)); // ['a', 'b', 'c', '1', '2', '3', '!', '@', '#']
console.log(myTest.match(/[a-zA-Z]/g)); // ['A', 'B', 'C', 'a', 'b', 'c']
console.log(myTest.match(/[^a-zA-Z]/g)); // ['1', '2', '3', '!', '@', '#']
console.log(myTest.match(/[a-zA-Z0-9]/g)); // ['A', 'B', 'C', 'a', 'b', 'c', '1', '2', '3']
console.log(myTest.match(/[^a-zA-Z0-9]/g)); // ['!', '@', '#']
console.log(myTest.match(/[^a-zA-Z0-9!@]/g)); // ['#']

let str = 'Am1 Am5 Am8 8Am Am1Am Am5Am Am8Am';
console.log(str.match(/Am[5-9]Am/g)); // [ 'Am5Am', 'Am8Am' ]