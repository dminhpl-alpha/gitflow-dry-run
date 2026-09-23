// generate a module for the application
function delta() {
  console.log('Delta function called');
}
module.exports = function () {
  console.log('Module 2 updated');
  delta();
};
