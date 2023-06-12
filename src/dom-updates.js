const userDoc = document.querySelector('.user-name');
const costDoc = document.querySelector('.user-cost');
const mainPanel = document.querySelector('.main-panel');


const userInfo = (name, cost) => {
  userDoc.innerText = name;
  costDoc.innerText = `Tally: ${cost}$`;
}

const displayUsersBookings = (bookinz) => {
  bookinz.sort((a,b)=> a.date-b.date).forEach(booked => {
    mainPanel.innerHTML += `
    <section class='booked' id='${booked.date}'>
      <h2>Thank you for your patronage</h2>
      <p>Your room number is ${booked.number}. It's a 
      ${booked.roomType} with a
      ${booked.bedSize} and
      ${booked.numBeds} number of beds. It is
      ${booked.bidet} that it has a bidet. Your cost per night is
      ${booked.costPerNight}. You're staying here ${booked.date}.</p>
    </section>
    `;
  })
}


export {
  userInfo,
  displayUsersBookings,
}