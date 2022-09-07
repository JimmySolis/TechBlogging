const { Comment } = require('../models')

const hardCodedComments = [
    {
        comment: 'This is my favorite website! Ever!',
        post_id: 2,
       
       
    },
    {
        comment: 'I have always wanted to have some information about this website! Thank you for the introduction.',
        post_id: 1,
       
       
    },
    {
        comment: 'How can we donate?',
        post_id: 1,
        
    },
    {
        comment: 'I made a user 6 weeks ago and love it!',
        post_id: 3,
         
      
    },
]

const seedComments = () => Comment.bulkCreate(hardCodedComments);

module.exports = seedComments;