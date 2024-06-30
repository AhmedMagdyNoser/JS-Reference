/*

http and https
These libraries enable you to create HTTP and HTTPS servers and make HTTP requests.
They provide functionality for handling incoming requests, sending responses, and working with HTTP headers.

*/

const fs = require('fs');
const path = require('path');
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Handle different routes based on the requested URL
  switch (req.url) {
    case '/':
      serveHTMLFile(res, 200, 'index');
      break;
    case '/about':
      serveHTMLFile(res, 200, 'about');
      break;
    case '/contact':
      serveHTMLFile(res, 200, 'contact');
      break;
    default:
      serveHTMLFile(res, 404, 'error');
      break;
  }
});

function serveHTMLFile(res, status, fileName) {
  const filePath = path.join(__dirname, 'pages', `${fileName}.html`);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(err.toString());
    } else {
      res.writeHead(status, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

const PORT = 5000;

// Start the server and listen on the specified PORT
server.listen(PORT, 'localhost', () => console.log(`Server is running on port:${PORT}`));
