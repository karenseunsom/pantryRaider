var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');

// GET home page.
router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Express' });
});

router.post('/signup', function(req, res, next) {
    // console.log(req)
    // no need to check if values exist bc they are required forms
    // hash the password with bcrypt
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            // store user details
            db.Users.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            })
            // respond with success and rout to the search page 
                .then((user) => {
                    res.status(201).json(user)
                    // todo redirect after submit to the results page
                    // res.redirect('')
                })
        })
    // res.json({message: 'success'})
})


module.exports = router;