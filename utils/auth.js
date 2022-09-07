const withAuth = (req, res, next) => {
    if(!req.session.loggedIn){
        res.redirect('/signUp');
    } else {
        next();
    }
}

module.exports = withAuth;