// import { sum, sub } from "./foo.mjs"; 

// OR use * to import everything
import * as foo from "./foo.mjs";

console.log(foo); // { sum: f, sub: f }

console.log(foo.sum(3, 2));
console.log(foo.sub(3, 2));
