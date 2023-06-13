

const aAPI = type => {
 return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .catch(err => alert('Server is  down, try again later'))
}

const promises = () => Promise.all([aAPI('customers'), aAPI('rooms'), aAPI('bookings')]);

const post = (id, userID, date, roomNumber) => {
    return fetch('http://localhost:3001/api/v1/bookings', {
      method: 'POST',
      body: JSON.stringify({id: id, userID: userID, date: date, roomNumber: roomNumber }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(json => json.message)
    .catch(() => alert('Server is  down, try again later'));
  };





export { promises, post}