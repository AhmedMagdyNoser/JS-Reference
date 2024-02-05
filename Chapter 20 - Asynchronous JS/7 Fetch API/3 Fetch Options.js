/*

The fetch() method takes two arguments:
  - The resource (URL)
  - An options object (optional) (headers, method, body, mode, credentials, cache, redirect, integrity, keepalive, signal and referrerPolicy)

*/

fetch('https://jsonplaceholder.org/posts', {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST', // If not specified, the default method is GET
  body: JSON.stringify({
    title: 'foo',
    userId: 1,
  }),
})
  .then((response) => response.json())
  .then((result) => console.log(result));
