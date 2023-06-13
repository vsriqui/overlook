import chai from 'chai';
const expect = chai.expect;
import { peoplesTest, bookingsTest, roomsTest} from '../src/data/test-data.js';
import {  usernameToId, findUser, simpleFilter, usersRooms, usersCost} from '../src/overlook.js';


describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

describe('', () => {
  let result;
  let userID;
  let username;
  let usersTestName;
  let usersTestBookings;
  let usersRecordedRooms;
  let usersTestCost;
  beforeEach(() => {
  username = 'customer50';
  userID = 50;
  usersTestName = 'Eldridge Muller';
  usersTestBookings = [
    {
      id: '5fwrgu4i7k55hl722',
      userID: 50,
      date: '2023/12/15',
      roomNumber: 22
    },
    {
      id: '5fwrgu4i7k55hl723',
      userID: 50,
      date: '2023/12/24',
      roomNumber: 3
    },
    {
      id: '5fwrgu4i7k55hl725',
      userID: 50,
      date: '2022/01/29',
      roomNumber: 3
    }
  ];
  usersRecordedRooms = [
    {
      number: 22,
      roomType: 'single room',
      bidet: false,
      bedSize: 'full',
      numBeds: 2,
      costPerNight: 350.31,
      date: '2023/12/15'
    },
    {
      number: 3,
      roomType: 'single room',
      bidet: false,
      bedSize: 'king',
      numBeds: 1,
      costPerNight: 491.14,
      date: '2022/01/29'
    },
    {
      number: 3,
      roomType: 'single room',
      bidet: false,
      bedSize: 'king',
      numBeds: 1,
      costPerNight: 491.14,
      date: '2022/01/29'
    }
  ];
  usersTestCost = 1332.59;

  });
  

    
  describe('usernameToId', () => {
    it('Should be a function', () => {
      expect(usernameToId).to.be.a('function');
    });
    it('Should find user id by username', () => {
      result = usernameToId(username);
      expect(result).to.equal(userID);
  });
  });
  describe('findUser', () => {
    it('should be a function', () => {
      expect(findUser).to.be.a('function');
    });
    it('Should find users actual name by ID', () => {
      result = findUser(peoplesTest, userID);
      expect(result).to.equal(usersTestName);
  });
  });

  describe('filter', () => {
    it('Should be a function', () => {
      expect(simpleFilter).to.be.a('function');
    });
    it('Should find users bookings', () => {
      result = simpleFilter(bookingsTest, 'userID', userID);
      expect(result).to.deep.equal(usersTestBookings);
  });
  it('Should filter rooms by type', () => {
    result = simpleFilter(roomsTest, 'roomType', 'suite');
    expect(result).to.deep.equal([roomsTest[2]]);
  });
  it('Should filter bookings by date', () => {
    result = simpleFilter(bookingsTest, 'date', '2023/12/24');
    expect(result).to.deep.equal([usersTestBookings[1]]);
});
  });

  describe('usersRooms', () => {
    it('Should be a function', () => {
      expect(usersRooms).to.be.a('function');
    });
    it('Should find users rooms', () => {
      result = usersRooms(usersTestBookings, roomsTest);
      expect(result).to.deep.equal(usersRecordedRooms);
  });
  });
  describe('usersCost', () => {
    it('Should be a function', () => {
      expect(usersCost).to.be.a('function');
    });
    it('Should find users cost', () => {
      result = usersCost(usersRecordedRooms);
      expect(result).to.equal(usersTestCost);
    });
  });
});

