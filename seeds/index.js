const sequelize = require('../config/connection');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedPosts();    

    process.exit(0);
};

seedAll();