/*

AJAX with XMLHttpRequest (XHR) object

It is a built-in browser object that allows to make HTTP requests to web servers.
The XHR object is not available in Node.js. It is a browser API. Let's use this file as a script of an HTML file.

*/

function fetchCountry(data) {
  // Create the XHR object
  let xhr = new XMLHttpRequest();

  // Set the request. open(method, url, async?)
  xhr.open('GET', `https://jsonplaceholder.org/${data}`, true);

  // Send the request
  xhr.send();

  // Handle success
  xhr.onload = function () {
    console.log(data, JSON.parse(xhr.responseText));
  };
}

fetchCountry('posts');
fetchCountry('users');
fetchCountry('comments');

// But the problem is that you can not guarantee the order of the responses

// We can solve this problem using callbacks
