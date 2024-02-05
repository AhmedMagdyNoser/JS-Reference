/*

Callback hell (A.K.A. pyramid of doom)

Suppose we need to get posts, users, then comments from the API https://jsonplaceholder.org/${data}
1 posts
2 users
3 comments

A solution is to nest the callbacks

*/

// First, let's clean the code a little bit
function createRequest(data) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `https://jsonplaceholder.org/${data}`, true);
  xhr.send();
  return xhr;
}

function getCountries() {
  let xhr1 = createRequest('posts');
  xhr1.onload = function () {
    console.log('Posts:', JSON.parse(xhr1.responseText));

    let xhr2 = createRequest('users');
    xhr2.onload = function () {
      console.log('Users:', JSON.parse(xhr2.responseText));

      let xhr3 = createRequest('comments');
      xhr3.onload = function () {
        console.log('Comments:', JSON.parse(xhr3.responseText));
      };
    };
  };
}

getCountries();

/*

This solution guarantees the order of the responses
But it is not a good solution because it is hard to read and maintain.

This is called callback hell (A.K.A. pyramid of doom)
It is a situation where deeply nested callback functions in asynchronous code make the code hard to read and maintain.

Promises and async/await are solutions introduced to mitigate callback hell.
These alternatives provide a more structured and readable way to handle asynchronous operations and avoid deep nesting of callbacks.

*/
