// generate a module for the application
function delta() {
  console.log('Delta function called');
}

function epsilon() {
  console.log('Epsilon function called');
}

module.exports = function () {
  console.log('Module 2 updated');
  delta();
  epsilon();
};
