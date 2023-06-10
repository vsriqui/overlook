


const usernameToId = (userName) => {
  return Number(username.split('').filter(x => Number.isInteger(x-0)).join(''))  
}

