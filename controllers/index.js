const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dash');
const commentRoutes = require('./comment')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dash', dashRoutes);
router.use('/comment', commentRoutes)

module.exports = router;