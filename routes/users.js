var express = require('express');
const db = require('../models')
var router = express.Router();
const bcrypt = require('bcrypt');
const session = require('express-session')

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
            // todo 
                // * if user doesn't exist itll be a NULL 
                // * make an if function that if NULL => incorrect user or/and password is incorrect
            if (user === null) {
                req.flash('error', "Email and/or password doesn't exist")
                res.redirect('/users/login')
            }
            bcrypt.compare(req.body.password, user.password)
                .then((success) => {
                    if (success) {
                        req.session.user = user
                        res.redirect('/')
                    } else {
                        req.flash('error', 'Wrong password')
                        res.redirect('/users/login')
                    }
                })
            return
        })
});

// create a separate route for guest loging
router.get('/login/guest', (req, res) => {
    // find the guest user account
    db.User.findOne({
        where: {
            email: "guest@account.com"
        }
    })
        .then((user) => {
            if (user) {
                req.session.user = user
                res.redirect('/')
            }
        })
})

// GET home page.
router.get('/signup', function (req, res, next) {
    res.render('signup', { 
        title: 'Express',
        messages: req.flash()
    });
});

router.post('/signup', function (req, res, next) {
    if (req.body.password != req.body.confirmPassword) {
        req.flash('error', 'Passwords do not match')
        res.redirect('/users/signup')
    } else {
    bcrypt.hash(req.body.password, 10)
        .then((hash) => {
            // store user details
            db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            })
                .then((user) => {
                    req.flash('success', 'Account successfully created')
                    // todo redirect after submit to the results page
                    res.redirect('/users/login')
                })
        })
    }
})

router.get('/logout', (req, res) => {
    req.session.user = null;
    res.redirect('/users/login')
})

module.exports = router;