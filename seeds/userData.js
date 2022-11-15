const { User } = require ('../models')

const users = [
  {
    "name": "Lindsay",
    "email": "lindsay@email.com",
    "password": "password12345"
  },
  {
    "name": "Caleb",
    "email": "caleb@email.com",
    "password": "password12345"
  },
  {
    "name": "John",
    "email": "john@email.com",
    "password": "password12345"
  }
];

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;