/*

JS Modules

1. CommonJS Modules
- They are the older and more traditional way of organizing modules.
- They are loaded dynamically at runtime (allowing you to use the require() function anywhere in your code).
- They are still widely used in Node.js, but they are not supported by modern browsers.
- They use 'require()' and 'exports' or 'module.exports'
- They use the file extension .cjs (or .js ensuring that the package.json file has the property "type": "commonjs")

2. ES Modules
- They are the newer and more modern way of organizing modules.
- They are loaded statically at compile time (so the import statements must be at the top level of the file).
- They are supported by modern browsers.
- They use 'import' and 'export' or 'export default'
- They use the file extension .mjs (or .js ensuring that the package.json file has the property "type": "module")
- While importing you must ensure that the file path ends with the extention .js or .mjs (not mandatory with webpack or babel)

---------------------------

Notes:
- In NodeJS, the type of module system used is CommonJS by default. ("type": "commonjs" in package.json)

VERY IMPORTANT:
- When importing content from an external file, whether using CommonJS or ES Modules,
- The file is executed first, and subsequently, the import is initiated.
- This sequential process ensures that the necessary content within the file is executed before importing it.

*/
