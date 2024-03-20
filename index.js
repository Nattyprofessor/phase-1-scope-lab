// Write your solution in this file!
// helpers.js
let customerName = 'bob';
const leastFavoriteCustomer = 'someone';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'another person';
}

module.exports = { customerName, upperCaseCustomerName, setBestCustomer, overwriteBestCustomer, changeLeastFavoriteCustomer };
