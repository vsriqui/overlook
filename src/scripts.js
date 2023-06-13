// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {promises, post} from './api-calls.js'
import {usernameToId, findUser, simpleFilter, usersRooms, usersCost, usableRooms} from './overlook.js';
import {userInfo, displayUsersBookings, filterPanel, date, makeDate, formatDate, displayPossibleBookings, mainPanel, nav, see, loginPage, loginUsername, loginPassword, bookingPage, loginMessage} from './dom-updates.js'
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
let filteredRoomsByType;
let filterUsedOnDate;
let roomsAvailable;

// window.addEventListener('load', () => {
//   promises()
//     .then(data => {
//       customers = data[0].customers;
//       rooms = data[1].rooms;
//       bookings = data[2].bookings;
//       currentUserId = usernameToId('customer50')
//       currentUser = findUser(customers, currentUserId)
//       currentBookings = simpleFilter(bookings, 'userID', currentUserId)
//       currentUsersRooms = usersRooms(currentBookings, rooms)
//       currentUsersCost = usersCost(currentUsersRooms)
//       userInfo(currentUser, currentUsersCost)
//       displayUsersBookings(currentUsersRooms)
//       makeDate()
//       date.setAttribute("min", makeDate())
//     });
// });

nav.addEventListener('click', e => {
  if (e.target.classList.contains('see-bookings')) {
    displayUsersBookings(currentUsersRooms)
    see.classList.add('hidden') 
  } 
});

loginPage.addEventListener('click', (e) => {

   if (e.target.classList.contains('login-button') && loginPassword.value === 'overlook2021') {
  promises()
    .then(data => {
      customers = data[0].customers;
      rooms = data[1].rooms;
      bookings = data[2].bookings;
      currentUserId = usernameToId(loginUsername.value)
      currentUser = findUser(customers, currentUserId)
      console.log(currentUser)
      currentBookings = simpleFilter(bookings, 'userID', currentUserId)
      currentUsersRooms = usersRooms(currentBookings, rooms)
      currentUsersCost = usersCost(currentUsersRooms)
      userInfo(currentUser, currentUsersCost)
      displayUsersBookings(currentUsersRooms)
      makeDate()
      date.setAttribute("min", makeDate())
      loginPage.classList.add('hidden')
      bookingPage.classList.remove('hidden') 
    })
    .catch(() => alert('Invalid credentials'));     
  } 
});

mainPanel.addEventListener('click', e => {
  if (e.target.classList.contains('main-booking')) {
    console.log(e.target.id, 'specified ID')
    // selectRoom(e.target.id, currentBookings, currentUserId, dateSelector)
    console.log(currentBookings, 'update the users booked')
    post(Date.now().toString(), currentUserId, dateSelector, Number(e.target.id))
    .then((alert('You have successfully purchased a room')))
    .then(
    promises()
    .then(data => {
      customers = data[0].customers;
      rooms = data[1].rooms;
      bookings = data[2].bookings;
      currentUserId = usernameToId('customer50');
      currentUser = findUser(customers, currentUserId);
      currentBookings = simpleFilter(bookings, 'userID', currentUserId);
      currentUsersRooms = usersRooms(currentBookings, rooms);
      currentUsersCost = usersCost(currentUsersRooms);
      userInfo(currentUser, currentUsersCost);
      displayUsersBookings(currentUsersRooms);
      makeDate();
      date.setAttribute("min", makeDate());

    }));
  }
  see.classList.add('hidden') 
  console.log(e.target.id, 'this is the ID')
});

filterPanel.addEventListener('click', e => {

  if (e.target.classList.contains('submit') && date.value) {
    console.log(date.value)
    dateSelector = formatDate(date.value)
    roomTypeSelector = type.value
    filteredRoomsByType = simpleFilter(rooms, 'roomType', roomTypeSelector)
    filterUsedOnDate = simpleFilter(bookings, 'date', dateSelector);
    roomsAvailable = usableRooms(filterUsedOnDate ,filteredRoomsByType)
    displayPossibleBookings(roomsAvailable)
    see.classList.remove('hidden')
  } else if (e.target.classList.contains('submit')){
    mainPanel.innerHTML = '';
    mainPanel.innerHTML += `<h2>There are no rooms available for the type or date specified, or you forgot to specify.</h2>`
  }
});
