function checkAuth(req, res, next) {
    if (req.sessions.user) {
        next();
    } else if (req.path == '/login') {
        next();
    } else {
        res.status(401).json({error: 'Not Logged In'})
    }
}

module.exports = checkAuth