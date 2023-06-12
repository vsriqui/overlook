

const usernameToId = (userName) => {
  return Number(userName.split('').filter(x => Number.isInteger(x-0)).join(''))  
};
     
const findUser = ( customerData, uID) => {
  return customerData.find(person => person.id === uID).name
};
  
const usersBookings = (bookingsData, usersID) => {
  return bookingsData.filter(x => x.userID === usersID)
}; 

const usersRooms = (usersBookings, overlookRooms) => {
  let roomBookings = usersBookings
    .map(booking => overlookRooms
      .filter(room => room.number === booking.roomNumber))
    .reduce((acc, cur) => [...acc,...cur])
  
  roomBookings.forEach((x, i)=> x.date = usersBookings[i].date)
    
  return roomBookings
  };
    
const usersCost = (theRooms) => {
  return Number(theRooms.reduce((acc,cur) => acc + cur.costPerNight, 0).toFixed(2))
};


  

export {
  usernameToId,
  findUser,
  usersBookings,
  usersRooms,
  usersCost,
};