/*

To use ES modules in browsers:

1. Use the <script type="module"> tag to import and use the modules.
  <script type="module">
     import { add, subtract } from './mathUtils.mjs';

     console.log(add(5, 3)); // Output: 8
     console.log(subtract(5, 3)); // Output: 2
   </script>
  
2. Serve your files using a web server.
  Due to security restrictions, most browsers won't allow loading modules from the local file system (file://).
  You can use a simple web server like http-server or live-server to serve your files locally.

*/
