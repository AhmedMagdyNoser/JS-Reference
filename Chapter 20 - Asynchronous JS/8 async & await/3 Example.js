/*

Suppose we need to get posts, users, then comments from the API https://jsonplaceholder.org/${data}
1 posts
2 users
3 comments

*/

async function getCountries() {
  let response, data;
  response = await fetch('https://jsonplaceholder.org/posts');
  data = await response.json();
  console.log(data);
  response = await fetch('https://jsonplaceholder.org/users');
  data = await response.json();
  console.log(data);
  response = await fetch('https://jsonplaceholder.org/comments');
  data = await response.json();
  console.log(data);
}

getCountries(); // This returns a promise { state: fulfilled, result: undefined } (undefined because the function doesn't return anything)
