const userDoc = document.querySelector('.user-name');
const costDoc = document.querySelector('.user-cost');
const mainPanel = document.querySelector('.main-panel');
const filterPanel = document.querySelector('.filter-panel');
const date = document.querySelector('.date');

let formatted;

const userInfo = (name, cost) => {
  userDoc.innerText = name;
  costDoc.innerText = `Tally: ${cost}$`;
}
const displayPossibleBookings = (bookinz) => {
  mainPanel.innerHTML = '';
  if (bookinz.length > 0) {
  bookinz.forEach(booked => {
    mainPanel.innerHTML += `
    <button class='main-booking book' id='${booked.number}'><br>
      This room is available!!! <br><br>
      Your room number would be ${booked.number}. It's a 
      ${booked.roomType} with a
      ${booked.bedSize} and
      ${booked.numBeds} number of beds. It is
      ${booked.bidet} that it has a bidet. Your cost per night would be
      ${booked.costPerNight}. You're staying here ${booked.date}.
    </button>
    `;
  })} else {
    mainPanel.innerHTML += `<h2>There are no rooms available for the type or date specified, or you forgot to specify.</h2>`
  }
}
const displayUsersBookings = (bookinz) => {
  mainPanel.innerHTML = '';
  bookinz.sort((a,b)=> Number(a.date.split('/').join(''))- Number(b.date.split('/').join(''))).forEach(booked => {
    mainPanel.innerHTML += `
    <button class='main-booked book'><br>
      Thank you for your patronage! <br><br>
      Your room number is ${booked.number}. It's a 
      ${booked.roomType} with a
      ${booked.bedSize} and
      ${booked.numBeds} number of beds. It is
      ${booked.bidet} that it has a bidet. Your cost per night is
      ${booked.costPerNight}. You're staying here ${booked.date}.
    </button>
    `;
  })
}

const makeDate = () => {
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
if(month < 10)
month = '0' + month.toString();
if(day < 10)
day = '0' + day.toString()
let currentDate = `${year}-${month}-${day}`;
console.log(currentDate)
return currentDate
}

const formatDate = (dateSelect) => {
  return dateSelect.split('-').join('/')
}

export {
  userInfo,
  displayUsersBookings,
  filterPanel,
  date,
  mainPanel,
  makeDate,
  formatDate,
  displayPossibleBookings,
}