const sequelize = require('../config/connection');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');
const seedComments = require('./comments-seeds')

const seedAll = async () => {
    await sequelize.sync({ force: false });

    // await seedUsers();

    await seedPosts();    

    await seedComments();

    process.exit(0);
};

seedAll();