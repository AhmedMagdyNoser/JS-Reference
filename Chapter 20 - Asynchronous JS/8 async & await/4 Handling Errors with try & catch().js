/*

Handling Errors with try...catch blocks

*/

async function getCountries() {
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
}

getCountries(); // returns a promise { state: rejected, result: TypeError: ... }
