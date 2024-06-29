const path = require('path');

// Note: these comments don't provide an accurate paths, they are just to explain the idea.
// suppose the absolute path of the current file is E:/Users/username/Desktop/path Library/path Library.js

console.log(__filename); // E:/Users/username/Desktop/path Library/path Library.js
console.log(__dirname); // E:/Users/username/Desktop/path Library

console.log(path.dirname(__filename)); // E:/Users/username/Desktop/path Library
console.log(path.basename(__filename)); // path Library.js
console.log(path.extname(__filename)); // .js

console.log(path.parse(__filename)); // { root: 'E:/', dir: 'E:/Users/username/Desktop/path Library', base: 'path Library.js', ext: '.js', name: 'path Library' }

console.log(path.join(__dirname, 'subfolder', 'file.txt')); // E:/Users/username/Desktop/path Library/subfolder/file.txt
console.log(path.resolve(__dirname, 'subfolder', 'file.txt')); // E:/Users/username/Desktop/path Library/subfolder/file.txt

console.log(path.join('subfolder', 'file.txt')); // subfolder/file.txt
console.log(path.resolve('subfolder', 'file.txt')); // E:/Users/username/Desktop/path Library/subfolder/file.txt

// Instead of hardcoding paths or using string concatenation, it's recommended to use path.join() and path.resolve() to avoid errors in paths. They are platform-independent.
