/*

Introduction to NodeJS

CONTENT
  - What Is Nodejs?
  - What Is REPL?
  - What Is NPM?
  - Publishing to NPM
  - Built-in Libraries

==========================================================================

What is Nodejs?

Node.js is an open-source environment that runs JavaScript outside the browser.
It enables JavaScript to interact directly with servers, extending its use to back-end.
It follows a non-blocking, asynchronous approach.

Check for your node version using the command > node --version

*/

console.log('Hello World!'); // This prints "Hello World!"

/*

to run this code: run the command > node currentFileRelativeOrAbsolutePath

==========================================================================

REPL (Read-Eval-Print Loop)

It's an interactive programming environment that allows you to execute code snippets and see the results immediately.

Open a REPL setion run the command > node
Get help about it run the command  > .help
Eexit it run the command           > .exit

==========================================================================

NPM (Node Pagckage Manager)

NPM contains externally built modules or libraries. These libraries help us build many programming projects.

Initialize a node project, use the command > npm init |-y|
if you didn't use the -y option, the npm will ask some data about the project and then will create the project with a package.json file.
if you used the -y option, the npm will create the project with a package.json file automatically.

Install libraries from npm to our project, use the command > npm i libraryName
Uninstall libraries from our project, use the command      > npm uninstall libraryName

Dev dependencies:
development dependencies are packages or libraries that are used during the development process of a project.
They are not required for the production version of the project but are helpful for tasks like testing, building, or maintaining the codebase.
dev dependencies are installed separately from regular dependencies using commands like > npm i libraryName --save-dev

Nodemon library (example)
Nodemon is a tool used in web development with Node.js.
It helps in automatically restarting the Node.js application whenever changes are made to the source code.
This saves developers from manually stopping and restarting the server after each modification.

> npm i nodemon --save-dev
you'll notice that "nodemon" was added to the package.json in the devDependencies
you can now run the project using the command > nodemon main.js

if the termainal didn't recognize nodemon,
you may need to install nodemon globally using the command > npm install -g nodemon

In the scripts of the package.json file you can add "dev": "nodemon main.js".
So you can run the project using the command > npm run dev

==========================================================================

PUBLISHING TO NPM

Publish a package to npm.com:
1. login in the terminal using the command       > npm login
2. publish the current project using the command > npm publish

To update your package, first update its version using one of the following commands (semantic versioning):
  1. fixing small issues, bugs, or security vulnerabilities in your package         > npm version patch
  2. adding new features or functionality to your project                           > npm version minor
  3. making significant changes that could potentially break existing functionality > npm version major
After that, simply run > npm publish

To remove your library from the npm.com, run > npm unpublish libraryName --force

==========================================================================

BUILT-IN LIBRARIES

Nodejs comes with several built-in libraries that you don't need to install separately from npm.
fs (fileSystem), http, path, os, and util are some examples of built-in libraries in Node.js

We will talk about some of these libraries later.

*/
