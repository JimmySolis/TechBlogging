const { User } = require('../models');

const foundingUsers = [
    {
        username: 'Jamspiller007',
        password: 'Bronco$500'
    },
    {
        username: 'SamIam',
        password: 'GreenEggs100'
    },
    {
        username: 'SilvestorCLAWS',
        password: 'Milkstightup9lifes'
    },
    
];

const seedUsers = () => User.bulkCreate(gallerydata);

module.exports = seedUsers;

