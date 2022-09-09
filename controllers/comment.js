const router = require('express').Router();
const { User, Post, Comment } = require('../models');


router.get('/:id', async (req, res) => {
        try {
            if(req.session.loggedIn){
            const postComment = await Post.findOne({
                where:{
                    post_id: req.params.id
                },
                attributes: ['post_id', 'title', 'content'],
                raw: true
            });
            // console.log(postComment)
            res.render('comment', { postComment, loggedIn: req.session.loggedIn })
        } else {
            res.render('signup')
        }
        } catch (error) {
            res.status(500).json(error);
        }

} )

router.post('/add', async (req, res) => {
    try {
        const addComment = Comment.create({
            comment: req.body.comment,
            post_id: req.body.post_id,
            user_id: req.session.userid
        })
        res.status(200).json(addComment);
    } catch (error) {
        res.status(500).json(error)
    }

})

module.exports = router;