var express = require('express');
const db = require('../models');
var router = express.Router();
const bcrypt = require('bcrypt');

/* GET users listing. */
router.post('/', function (req, res, next) {
    res.json({ message: 'success' });
});

// GET home page.
router.get('/login', function (req, res, next) {
    res.render('login', { 
        title: 'Express',
        messages: req.flash() 
    });
});

router.post('/login', function (req, res, next) {
    db.User.findOne({
        where: {
            email: req.body.email
        }
    })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password)
                .then((success) => {
                    if (success) {
                        req.session.user = user
                        // res.json({message: 'succesfully logged in'})
                        res.redirect('/')
                    } else {
                        // res.status(401).json({ error: 'incorrect password' })
                        req.flash('error', 'Wrong password')
                        res.redirect('/users/login')
                    }
                })
        })
});

// GET home page.
router.get('/signup', function (req, res, next) {
    res.render('signup', { title: 'Express' });
});

router.post('/signup', function (req, res, next) {
    // console.log(req)
    // no need to check if values exist bc they are required forms
    // hash the password with bcrypt
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            // store user details
            db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            })
                // respond with success and rout to the search page 
                .then((user) => {
                    // res.status(201).json(user)
                    // todo redirect after submit to the results page
                    res.redirect('/')
                })
        })
    // res.json({message: 'success'})
})

module.exports = router;
