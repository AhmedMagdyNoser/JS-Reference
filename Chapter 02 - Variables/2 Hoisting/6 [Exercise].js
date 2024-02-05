// Try to predict the output of the following code:

console.log(motherBird());

function motherBird() {
  function babyBird() {
    return 'Baby1';
  }

  return babyBird();

  function babyBird() {
    return 'Baby2';
  }
}
