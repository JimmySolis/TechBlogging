const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            attributes: ['title', 'content', 'created_at'],
            include:[
                {
                 model: User, 
                 attributes: ['username'],
                }],
        });
        const posts = postData.map(post => post.get({ plain: true}));
        console.log(posts)
        res.render('homepage', { 
            posts,
            loggedIn: req.session.loggedIn
         });
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/dash', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where:{
                user_id: req.session.username
            },
            attributes: ['post_id', 'title', 'content', 'createdAt'],
            include:[
                { 
                    model: Comment,
                    attributes: ['com_id', 'comment', 'post_id', 'createdAt'],
                    include: { model: User, attributes: ['username']}

                 },
                 {
                    model: User,
                    attributes:['username']
                 }
                ],
        });
        const posts = postData.map(data => data.get({plain:true}))
        console.log({posts})
        res.render('dashboardpage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
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
   if(req.session.loggedIn){
    res.redirect('/');
    return;
   }
   res.render('login')
})


module.exports = router;