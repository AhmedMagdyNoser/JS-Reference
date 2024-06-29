/*

Axios Request Config

Axios provides a configuration object to customize the request. The configuration object can have the following properties:

- method          => 'get', 'post', 'put', 'delete', 'patch', etc. (default: 'get')
- baseURL         => 'https://jsonplaceholder.org'
- url             => '/posts' (relative to baseURL absolute that overrides baseURL)
- params          => { id: 1, ... } (a plain object or a URLSearchParams object)
- headers         => { 'Content-Type': 'application/json', Authorization: 'Bearer <token>', ... }
- data            => { firstName: 'John', lastName: 'Doe' }
- timeout         => 5000 (the time in milliseconds before the request times out)
- withCredentials => true (indicates whether or not cross-site Access-Control requests should be made using credentials)
- ...

*/

const axios = require('axios');

// We can send HTTP requests using Axios by using axios() method and pass the configuration object as an argument.

async function getPosts() {
  try {
    let response = await axios({
      method: 'get',
      baseURL: 'https://jsonplaceholder.org',
      url: '/posts',
      timeout: 100, // 100 milliseconds is too low for a request to complete
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getPosts(); // Error: timeout of 100ms exceeded
