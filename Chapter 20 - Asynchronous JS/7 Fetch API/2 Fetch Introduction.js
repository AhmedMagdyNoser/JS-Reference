// fetch() method

// It is used to fetch a resource from the network.
// It is simmilar to XMLHttpRequest (XHR) object but with a simpler API.
// It can be used in the browser and in Node.js.

// It returns a promise that resolves to the Response object representing the response to your request.
// The returned promise only rejects when a network error is encountered.

// ------------------------------------------------------------

// Suppose we went to get posts from this url: https://jsonplaceholder.org/posts
const url = `https://jsonplaceholder.org/posts`;

// ------------------------------------------------------------

// It returns the a promise whose result is the Response object.
let promise1 = fetch(url);

promise1.then((response) => console.log(response)); // Response object { url: "https://jsonplaceholder.org/posts", type: "cors", status: 200, ... }

// To get the body from the Response object we need to call the json() method which is a method of the Response.prototype object.
// The json() also returns a promise that resolves to the JSON representation of the response body.
let promise2 = promise1.then((response) => response.json());

promise2.then((result) => console.log(result)); // promise2 result is our data

// ------------------------------------------------------------

// We can chain the promises

fetch(url)
  .then((response) => response.json())
  .then((result) => console.log(result));

// ------------------------------------------------------------

// Or we can use async/await

(async () => {
  let response = await fetch(url);
  let result = await response.json();
  console.log(result);
})();
