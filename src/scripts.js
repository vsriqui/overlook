// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {promises} from './api-calls.js'
import {usernameToId, findUser, simpleFilter, usersRooms, usersCost} from './overlook.js';
import {userInfo, displayUsersBookings, filterPanel, date, makeDate, formatDate, mainPanel} from './dom-updates.js'
console.log('This is the JavaScript entry file - your code begins here.');

let customers;
let rooms;
let bookings;
let currentUserId;
let currentUser;
let currentBookings;
let currentUsersRooms;
let currentUsersCost;
let dateSelector;
let roomTypeSelector;

window.addEventListener('load', () => {
  promises()
    .then(data => {
      customers = data[0].customers;
      rooms = data[1].rooms;
      bookings = data[2].bookings;
      console.log('customers', customers)
      console.log('rooms', rooms)
      console.log('bookings', bookings)
      currentUserId = usernameToId('customer50')
      console.log(currentUserId)
      currentUser = findUser(customers, currentUserId)
      console.log(currentUser)
      currentBookings = simpleFilter(bookings, 'userID', currentUserId)
      console.log(currentBookings, 'asdasdasd')
      currentUsersRooms = usersRooms(currentBookings, rooms)
      console.log(currentUsersRooms)
      currentUsersCost = usersCost(currentUsersRooms)
      console.log(currentUsersCost)
      userInfo(currentUser, currentUsersCost)
      displayUsersBookings(currentUsersRooms)
      console.log(rooms.map(x => x.roomType))
      makeDate()
      date.setAttribute("min", makeDate())
    });
});


filterPanel.addEventListener('click', e => {

  if (e.target.classList.contains('submit')) {
    dateSelector = formatDate(date.value)
    roomTypeSelector = type.value
  console.log(dateSelector)
  console.log(roomTypeSelector)
  console.log('asdsadds')
  }
});

// document.getElementById("firstDateId").onchange = function () {
//   var input = document.getElementById("secondDateId");
//   input.setAttribute("min", this.value);
// }