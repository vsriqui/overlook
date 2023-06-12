const userDoc = document.querySelector('.user-name');
const costDoc = document.querySelector('.user-cost');
const mainPanel = document.querySelector('.main-panel');
const filterPanel = document.querySelector('.filter-panel');
const date = document.querySelector('.date');


const userInfo = (name, cost) => {
  userDoc.innerText = name;
  costDoc.innerText = `Tally: ${cost}$`;
}

const displayUsersBookings = (bookinz) => {
  bookinz.sort((a,b)=> Number(a.date.split('/').join(''))- Number(b.date.split('/').join(''))).forEach(booked => {
    mainPanel.innerHTML += `
    <button class='booked' id='${booked.date}'>
      <h2>Thank you for your patronage</h2>
      <p>Your room number is ${booked.number}. It's a 
      ${booked.roomType} with a
      ${booked.bedSize} and
      ${booked.numBeds} number of beds. It is
      ${booked.bidet} that it has a bidet. Your cost per night is
      ${booked.costPerNight}. You're staying here ${booked.date}.</p>
    </button>
    `;
  })
}


export {
  userInfo,
  displayUsersBookings,
  filterPanel,
  date,
  mainPanel,
}