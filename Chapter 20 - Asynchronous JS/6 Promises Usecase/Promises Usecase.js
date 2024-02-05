/*

Solution

Suppose we need to get posts, users, then comments from the API https://jsonplaceholder.org/${data}
1 posts
2 users
3 comments

*/

function fetchCountry(data) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.org/${data}`, true);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status != 200) {
        reject(JSON.parse(xhr.responseText));
      }
      resolve(JSON.parse(xhr.responseText));
    };
  });
}

fetchCountry('posts') // returns a promise
  .then((result) => {
    console.log(result);
    return fetchCountry('users'); // returns a promise
  })
  .then((result) => {
    console.log(result);
    return fetchCountry('comments'); // returns a promise
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Now we can garantee that the countries will be logged in order.
