/*

Handling errors with catch() method

Remember: If an error occurs inside an async function, it returns a rejected promise whose result is the error.
This allows us to use catch() method to handle errors in the promise returned by the async function itself.

*/

async function getCountries() {
  let response, country;
  response = await fetch('https://restcountries.com/v3.1/name/usa1'); // usa1 doesn't exist.
  country = await response.json();
  console.log(country[0].name.common); // ERROR HERE => TypeError: Cannot read property 'name' of undefined
  response = await fetch('https://restcountries.com/v3.1/name/egypt');
  country = await response.json();
  console.log(country[0].name.common);
  response = await fetch('https://restcountries.com/v3.1/name/germany');
  country = await response.json();
  console.log(country[0].name.common);
}

getCountries().catch((error) => console.log('Cought Error:', error)); // Cought Error: TypeError: Cannot read properties of undefined (reading 'name')

/*

------------------------------------------------------------

Of course, you can use the second callback function of then() method to handle errors. But it's not recommended. Because it's not clear and readable. It's better to use catch() method or try...catch blocks.

However, it is not a good practice to mix then(), catch() and finally() methods with async...await syntax. It's better to use one of them.

So the following code is better:

(async function () {
  try {
    let response, country;
    response = await fetch('https://restcountries.com/v3.1/name/usa1'); // usa1 doesn't exist.
    country = await response.json();
    console.log(country[0].name.common); // ERROR HERE => TypeError: Cannot read property 'name' of undefined
    response = await fetch('https://restcountries.com/v3.1/name/egypt');
    country = await response.json();
    console.log(country[0].name.common);
    response = await fetch('https://restcountries.com/v3.1/name/germany');
    country = await response.json();
    console.log(country[0].name.common);
  } catch (error) {
    console.log('Cought Error:', error); // Cought Error: TypeError: Cannot read properties of undefined (reading 'name')
  }
})();

Here, we use the IIFE (Immediately Invoked Function Expression) syntax to call the async function.

*/
