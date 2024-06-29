/*

Axios Library

It is a promise-based HTTP client for the browser and Node.js.
It is a library that helps in making HTTP requests to external resources.

Official documentation: https://axios-http.com/docs/intro

*/

const axios = require('axios');

// We can send HTTP requests using Axios by using axios() method and pass the configuration object as an argument.

const config = {
  method: 'get',
  baseURL: 'https://jsonplaceholder.org',
  url: '/posts',
}

async function getPosts() {
  let response = await axios(config);
  console.log(response);
}

getPosts();


// ----------------------------------------------------------

// Aliases

// Axios provides aliases for common HTTP methods. The aliases are:

// - axios.request(config)
// - axios.get(url[, config])
// - axios.post(url[, data[, config]])
// - axios.patch(url[, data[, config]])
// - axios.put(url[, data[, config]])
// - axios.delete(url[, config])
// ...
