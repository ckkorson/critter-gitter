const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPets = require('./petData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPets();

  process.exit(0);
};

seedDatabase();
