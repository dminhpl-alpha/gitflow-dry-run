// generate a module for the application

function alpha() {
  console.log('Alpha function called');
}
function alpha1() {
  console.log('Alpha1 function called');
}
function alpha2() {
  console.log('Alpha2 function called');
}
function betaUpdated() {
  console.log('Beta function called');
}
module.exports = function () {
  console.log('Module 1 loaded');
  alpha();
  alpha1();
  alpha2();
  betaUpdated();
};
