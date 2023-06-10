

const aAPI = type => {
 return fetch(`http://localhost:3001/api/v1/${type}`)
    .then(response => response.json())
    .catch(err => console.log(err))
}

const promises = () => Promise.all([aAPI('customers'), aAPI('rooms'), aAPI('bookings')]);







export { promises}