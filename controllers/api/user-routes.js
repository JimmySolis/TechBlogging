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
        console.log({users})
        res.json(users);
    } catch (error) {
        res.status(500).json(error)
    }
})



//  Creating a User.
router.post('/', async (req, res) =>{
    try {
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password
        });
        // req.session.save({

        // })
        console.log(newUser)
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;