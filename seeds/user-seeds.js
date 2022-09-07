const { User } = require('../models');

const foundingUsers = [
    // {   
    //     // user_id: 1,
    //     username: 'Jamspiller007',
    //     password: 'Bronco$500'
    // },
    // {           
    //     // user_id: 2,
    //     username: 'SamIam',
    //     password: 'GreenEggs100'
    // },
    // {
    //     // user_id: 3,
    //     username: 'SilvestorCLAWS',
    //     password: 'Milkstightup9lifes'
    // },
    
];

const seedUsers = () => User.bulkCreate(foundingUsers);

module.exports = seedUsers;

