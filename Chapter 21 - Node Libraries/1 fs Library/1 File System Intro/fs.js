// fs (File System)

const fs = require('fs'); // Let's us read, create, update, delete, rename files

const myPath = `${__dirname}/test.txt`; // __dirname is the current directory

// Read File
// fs.readFile(myPath, 'utf-8', (err, data) => {
//   err ? console.log(err) : console.log(data);
// });

// Create or Write File
// fs.writeFile(myPath, 'Ahmed', (err) => {
//   err ? console.log(err) : console.log('File Changed');
// });

// Append or Update File
// fs.appendFile(myPath, '\nMagdy', (err) => {
//   err ? console.log(err) : console.log('File Updated');
// });

// Rename File
// fs.rename(myPath, 'test.txt', (err) => {
//   err ? console.log(err) : console.log('File Renamed');
// });

// Delete File
// fs.unlink(myPath, (err) => {
//   err ? console.log(err) : console.log('File Deleted');
// });

/*

Asynchronous vs. Synchronous:
readFile() is an asynchronous function which means that it is a non-blocking function
readFileSync() is a synchronous function which means that it is a blocking function,
readFileSync() blocks the execution of further code until the file reading is finished.
readFileSync() returns the contents of the file directly, without the need for a callback function.

*/

// const content = fs.readFileSync(myPath, 'utf-8');

// console.log('The content of the file is ' + content);
