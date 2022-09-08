const router = require('express').Router();
const { User, Post, Comment } = require('../../models');


// This is here for tests to make sure we can make calls.
router.get('/', async (req, res) => {
    try {
        const userdata = await User.findAll({
            attributes: ['username', 'user_id'],
            include:[{ model: Post }]
        });
        const users = userdata.map(user => user.get({ plain: true}));
        // console.log({users})
        res.json(users);
    } catch (error) {
        res.status(500).json(error)
    }
})

// Creating a post
router.post('/post', async (req, res) => {
    try {
        const postMaker = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.userid
        })
        res.status(200).json(postMaker)
    } catch (error) {
        res.status(500).json(error)
    }
})

// This is to update the post
router.put('/update', async (req, res) => {
    try {
        const updatePost = await Post.update(
            {
                title: req.body.newTitle,
                content: req.body.newContent
            },
           {
            where: {
                post_id : req.body.post_id
            }
           } 
        )
           console.log(updatePost)
           res.status(200).json(updatePost);
    } catch (error) {
            res.status(500).json(error)

    }
})

// Delete post

router.delete('/delete', async (req, res) => {
        try {
            const deletePost = Post.destroy({
                where: {
                    post_id : req.body.post_id
                }
            })
            res.status(200).json(deletePost)
        } catch (error) {
            res.status(500).json(error)
        }
})


//  Creating a User.
router.post('/', async (req, res) =>{
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userid = newUser.user_id;
            req.session.username = newUser.username;
        // console.log(newUser);
        res.status(200).json(newUser);
        })
        
    } catch (error) {
        res.status(500).json(error)
    }
})

// Login
router.post('/login', async (req, res) =>{
    try {
        const dbUserData = await User.findOne({
            where:{
                username: req.body.username
            }
        });

        if(!dbUserData) {
            res
            .status(400)
            .json({ message: 'Incorrect username or password. Please try again!'});
            return;
        }
        const validatePassword = dbUserData.checkPassword(req.body.password);

        if(!validatePassword) {
            res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!'});
            return;
        }
    req.session.save(() => {
        req.session.username = dbUserData.username;
        req.session.loggedIn = true ;
        req.session.userid =  dbUserData.user_id;

        console.log(
          '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',
          req.session.cookie
        );

        res
        .status(200)
        .json({ user: dbUserData, message: 'You are signed in!'});
        })
        // console.log(newUser)
       
    } catch (error) {
        res.status(500).json(error)
    }
})


// logout
router.post('/logout', (req, res) => {
    if(req.session.loggedIn) {
        res.render('homepage')
        req.session.destroy(() => {
            res.status(200).end;
        });
    } else {
        res.status(404).end();
    }
});


module.exports = router;