const sequelize = require('../config/connection');
const seedPosts = require('./post-seeds');
const seedUser = require('./user-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedPosts();

    await seedUser();

    process.exit(0);
};

seedAll();