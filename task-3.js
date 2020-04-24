'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const password = prompt('Enter the password!');

if (password === null) {
  message = 'Canceled by user';
  console.log(message);
} else if (password === ADMIN_PASSWORD) {
  message = 'Welcome!';
  console.log(message);
} else {
  message = 'Access denied, invalid password!';
  console.log(message);
}
