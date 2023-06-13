// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import {promises, post} from './api-calls.js'
import {usernameToId, findUser, simpleFilter, usersRooms, usersCost, usableRooms} from './overlook.js';
import {userInfo, displayUsersBookings, filterPanel, date, makeDate, formatDate, displayPossibleBookings, mainPanel, nav, see} from './dom-updates.js'
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
      console.log(makeDate())
      date.setAttribute("min", makeDate())
    });
});

nav.addEventListener('click', e => {
  if (e.target.classList.contains('see-bookings')) {
    displayUsersBookings(currentUsersRooms)
    see.classList.add('hidden') 
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
      console.log(makeDate())
      date.setAttribute("min", makeDate())
      console.log(currentBookings, 'ahhhhhhhhhhh')
    }));
  }
  see.classList.add('hidden') 
  console.log(e.target.id, 'this is the ID')
});

filterPanel.addEventListener('click', e => {

  if (e.target.classList.contains('submit')) {
    dateSelector = formatDate(date.value)
    roomTypeSelector = type.value
  console.log(dateSelector)
  console.log(roomTypeSelector)
  console.log('asdsadds')
filteredRoomsByType = simpleFilter(rooms, 'roomType', roomTypeSelector)
console.log(filteredRoomsByType, 'filtered by selected room type')
filterUsedOnDate = simpleFilter(bookings, 'date', dateSelector);
console.log(filterUsedOnDate, 'filtered by selected date')
roomsAvailable = usableRooms(filterUsedOnDate ,filteredRoomsByType)
console.log(roomsAvailable)
displayPossibleBookings(roomsAvailable)
see.classList.remove('hidden')
  }
});
