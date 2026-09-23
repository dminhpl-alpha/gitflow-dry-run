// generate a module for the application

function alpha() {
  console.log('Alpha function called');
}
function betaUpdated() {
  console.log('Beta function called');
}
module.exports = function () {
  console.log('Module 1 loaded');
  alpha();
  betaUpdated();
};
