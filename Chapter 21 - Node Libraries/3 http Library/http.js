/*

http and https
These libraries enable you to create HTTP and HTTPS servers and make HTTP requests.
They provide functionality for handling incoming requests, sending responses, and working with HTTP headers.

*/

const fs = require('fs');
const http = require('http');

let page;

// Create an HTTP server
const server = http.createServer((req, res) => {

  // Handle different routes based on the requested URL
  switch (req.url) {
    case '/':
      // If the requested URL is '/', set the page variable to the home.html file path
      page = `${__dirname}/Pages/home.html`
      break;
    case '/about':
      // If the requested URL is '/about', set the page variable to the about.html file path
      page = `${__dirname}/Pages/about.html`
      break;
    case '/contact':
      // If the requested URL is '/contact', set the page variable to the contact.html file path
      page = `${__dirname}/Pages/contact.html`
      break;
    default:
      // If the requested URL doesn't match any of the above cases, set the page variable to the error.html file path
      page = `${__dirname}/Pages/error.html`
      res.statusCode = 404; // Set the response status code to 404 (Not Found)
      break;
  }

  // Read the contents of the specified HTML file
  fs.readFile(page, 'utf-8', (err, data) => {
    if (err) {
      console.log(err); // If an error occurs while reading the file, log the error to the console
    } else {
      res.end(data); // Send the file contents as the response
    }
  });

});

// Start the server and listen on the specified PORT and HOST
server.listen(4000, 'localhost', () => {
  console.log(`Server is running`);
});
