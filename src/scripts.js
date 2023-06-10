// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {promises} from './api-calls.js'

console.log('This is the JavaScript entry file - your code begins here.');

let customers;
let rooms;
let bookings;

window.addEventListener('load', () => {
  promises()
    .then(data => {
      customers = data[0].customers;
      rooms = data[1].rooms;
      bookings = data[2].bookings;
      console.log('customers', customers)
      console.log('rooms', rooms)
      console.log('bookings', bookings)
    });
});