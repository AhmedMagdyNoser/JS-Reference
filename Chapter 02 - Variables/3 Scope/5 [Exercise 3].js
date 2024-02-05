// debug the code below to see the scope chain in action

let family = 'family';

function mother() {
  let motherVariable = 'mother';

  function daughter(brother) {
    let daughterVariable = 'daughter';
    console.log(daughterVariable + ' from daughter');
    console.log(motherVariable + ' from daughter');
    console.log(family + ' from daughter');
    brother();
  }

  function son() {
    let sonVariable = 'son';
    console.log(sonVariable + ' from son');
    console.log(motherVariable + ' from son');
    console.log(family + ' from son');
    // console.log(daughterVariable + ' from son'); // daughterVariable is not defined in the scope of son()
  }

  daughter(son);
}

mother();