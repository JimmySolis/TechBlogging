const { Post } = require('../models');

const starterPosts = [
    {
        // post_id: 1,
        title: 'HELLO WORLD!',
        content: 'Welcome to our website TechBlogging. Where we talk all about tech!',
        user_id: 1
    },
    {
        // post_id: 2,
        title: 'How To Get Started?',
        content: 'You can read all the post here in the homepage. But if you would like to comment on a please sign-up or sign-in. 😇',
        user_id: 2
    },
    {
        // post_id: 3,
        title: 'Features',
        content: 'In our application you and comment on other users posts. If you would like to make your own posts please make a user and post away. You will find all of your posts in your dashboard!',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(starterPosts);

module.exports = seedPosts;