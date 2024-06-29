/*

Axios Interceptors

Axios interceptors allow us to run some code before or after a request is made or a response is received.

1 Request:  CLIENT -> INTERCEPTOR -> SERVER
2 Response: CLIENT <- INTERCEPTOR <- SERVER

*/

const axios = require('axios');

// We can add interceptors to the default instance of Axios or to a custom instance of Axios.

const myAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Add a request interceptor
myAxios.interceptors.request.use((config) => {
  console.log('Request was sent:', config);
  // You can modify the config object and add some custom logic here
  return config; // return the config object to continue the promise chain
});

// Add a response interceptor
myAxios.interceptors.response.use(
  (response) => {
    console.log('Response was received:', response);
    // You can modify the response object and add some custom logic here
    return response; // return the response object to continue the promise chain
  },
  (error) => {
    console.log('Error was received:', error);
    // You can modify the error object and add some custom logic here
    return Promise.reject(error); // return the error object to continue the promise chain
  }
);

(async function getPosts() {
  try {
    let response = await myAxios({ url: '/posts' });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();

// Output if successful:
// Request was sent: config { ... }
// Response was received: response { ... }
// response { ... }

// Output if failed:
// Request was sent: config { ... }
// Error was received: error { ... }
// error { ... }

// ============================================================

// We can also remove the interceptors using eject() method.

const requestInterceptor = myAxios.interceptors.request.use((config) => {
  console.log('Hello again! Request was sent:', config);
  return config;
});

const responseInterceptor = myAxios.interceptors.response.use(
  (response) => {
    console.log('Hello again! Response was received:', response);
    return response;
  },
  (error) => {
    console.log('Hello again! Error was received:', error);
    return Promise.reject(error);
  }
);

myAxios.interceptors.request.eject(requestInterceptor);
myAxios.interceptors.response.eject(responseInterceptor);

// Now, (Hello again!) interceptors are removed.

(async function getPosts() {
  try {
    let response = await myAxios({ url: '/posts' });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
})();
