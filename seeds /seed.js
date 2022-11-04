const sequelize = require('../config/connection');
// change Project to User maybe?
const { Pet, Project } = require('../models');

const adoptablePets = require('./adoptablePets.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const pets = await Pet.bulkCreate(adoptablePets, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
