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



// todo 
// 1) make a post route for /favorites that will create a new line for user and a new fav dish
// 2) check if user is signed in
// 3) create a new db line
// 4) make the table for favorites dish