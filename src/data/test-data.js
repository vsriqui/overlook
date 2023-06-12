const peoplesTest = [
  {
      "id": 47,
      "name": "Rachael Schinner"
    },
    {
      "id": 48,
      "name": "Kaylee Hermann"
    },
      {
      "id": 50,
      "name": "Eldridge Muller"
    },
    {
      "id": 49,
      "name": "Arnulfo Simonis"
    },
  
  ]

const bookingsTest = [
  {
    "id": "5fwrgu4i7k55hl720",
    "userID": 37,
    "date": "2022/02/03",
    "roomNumber": 25,

  },
  {
    "id": "5fwrgu4i7k55hl722",
    "userID": 50,
    "date": "2023/12/15",
    "roomNumber": 22,

  },
  {
    "id": "5fwrgu4i7k55hl723",
    "userID": 50,
    "date": "2023/12/24",
    "roomNumber": 3,

  },
  {
    "id": "5fwrgu4i7k55hl724",
    "userID": 37,
    "date": "2022/02/22",
    "roomNumber": 1,

  },
  {
    "id": "5fwrgu4i7k55hl725",
    "userID": 50,
    "date": "2022/01/29",
    "roomNumber": 3,

  }
  ];

  const roomsTest = [
    {
       "number": 22,
       "roomType": "single room",
       "bidet": false,
       "bedSize": "full",
       "numBeds": 2,
       "costPerNight": 350.31
     },
     {
       "number": 23,
       "roomType": "residential suite",
       "bidet": false,
       "bedSize": "queen",
       "numBeds": 2,
       "costPerNight": 176.36
     },
       {
       "number": 2,
       "roomType": "suite",
       "bidet": false,
       "bedSize": "full",
       "numBeds": 2,
       "costPerNight": 477.38
     },
     {
       "number": 3,
       "roomType": "single room",
       "bidet": false,
       "bedSize": "king",
       "numBeds": 1,
       "costPerNight": 491.14
     },
   ]
   


   module.exports = {
    peoplesTest, 
    bookingsTest, 
    roomsTest,
  }