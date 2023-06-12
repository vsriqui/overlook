const userDoc = document.querySelector('.user-name');
const costDoc = document.querySelector('.user-cost');


const userInfo = (name, cost) => {
  userDoc.innerText = name;
  costDoc.innerText = `Tally: ${cost}$`;
}



export {
  userInfo,
}