

const usernameToId = (userName) => {
  return Number(userName.split('').filter(x => Number.isInteger(x-0)).join(''))  
};
     
const findUser = ( customerData, uID) => {
  let found = customerData.find(person => person.id === uID).name
  return found
};

const simpleFilter = (data, key, searchFor) => {
  return data.filter(x => x[key] === searchFor)
}; 

const usableRooms = (used, type) => {
  let taken = used.map(room => room.roomNumber)
    let available = [];
    type.forEach(room => {
      if (!taken.includes(room.number))
        available.push(room)
      })
  
    return available 
  }

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
  simpleFilter,
  usersRooms,
  usersCost,
  usableRooms,
};