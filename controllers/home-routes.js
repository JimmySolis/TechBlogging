const router = require('express').Router();
const { User, Post, Comment } = require('../models');


router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['title', 'content', 'created_at'],
            include:[{ model: User }],
        });
        const posts = postData.map(post => post.get({ plain: true}));
        console.log(posts)
        res.render('homepage', { posts });
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/signUp', async (req, res) => {
    try {
        res.render('signUp')
    } catch (error) {
        res.status(500).json(error)
        
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login')
    } catch (error) {
        res.status(500).json(error)
        
    }
})


module.exports = router;