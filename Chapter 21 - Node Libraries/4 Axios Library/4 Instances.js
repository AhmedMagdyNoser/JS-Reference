/*

Axios Instances

Axios instances are useful when we want to create a new instance of Axios with a custom configuration.
We can create an instance of Axios using axios.create() method and pass the configuration object as an argument.

*/

const axios = require('axios');

// Create an instance of Axios

const myAxios = axios.create({
  method: 'get',
  baseURL: 'https://jsonplaceholder.org',
  headers: { 'Content-Type': 'application/json' },
  timeout: 1000,
});

// We can send HTTP requests using Axios instance by using the methods provided by the instance.

async function getPosts() {
  let response = await myAxios({ url: '/posts' });
  console.log(response);
}

getPosts();

// Of course, we can override the default configuration of the instance by passing a new configuration object as an argument.
