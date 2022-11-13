const { Pet } = require ('../models')

const petData = [
  {
    "name": "Brewer",
    "species": "Dog",
    "breed": "Beagle",
    "gender": "Male",
    "description": "He is super sweet!",
    "location": "Knoxville",
    "user_id": 1
  },
  {
    "name": "Atlas",
    "species": "Dog",
    "breed": "Coonhound/Shepard",
    "gender": "Male",
    "description": "He loves to snuggle!",
    "location": "Memphis",
    "user_id": 2
  },
  {
    "name": "Laya",
    "species": "Horse",
    "breed": "Arabian",
    "gender": "Female",
    "description": "She is very fast!",
    "location": "Nashville",
    "user_id": 3
  }
];

const seedPets = () => Pet.bulkCreate(petData);

module.exports = seedPets;