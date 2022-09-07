const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

// This displays the dashBoard.
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where:{
                user_id: req.session.userid
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
        console.log({ posts })
        res.render('dashboardpage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (error) {
        res.status(500).json(error)
    }
})



// This send us to the post page.
router.get('/:id', async (req, res) => {
    try{
        if(req.session.loggedIn){
            const getAndRenderPost = await Post.findOne({
                where: {
                    post_id : req.params.id
                },
                raw: true
            })
            console.log({getAndRenderPost});
            res.render('updatePost', { getAndRenderPost, loggedIn: req.session.loggedIn })
        } else{
            res.render('login')
        }
    } catch (error){
        res.status(500).json(error)
    }
})


module.exports = router;