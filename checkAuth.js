function checkAuth(req, res, next) {
    if (req.session.user) {
        next();
    } else if (req.path == '/users/login' || req.path == '/users/signup' || req.path == '/users/login/guest') {
        next();
    } else {
        res.redirect('/users/login')
    }
}

module.exports = checkAuth