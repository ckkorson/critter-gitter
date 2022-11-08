const { User } = require ('../models')

const users = [
  {
    "name": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "name": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "name": "Amiko",
    "email": "amiko2k20@aol.com",
    "password": "password12345"
  }
];

const seedUsers = () => User.bulkCreate(users);

module.exports = seedUsers;