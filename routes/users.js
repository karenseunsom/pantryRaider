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
            console.log('found user')
            console.log(user)
            // todo 
                // * if user doesn't exist itll be a NULL 
                // * make an if function that if NULL => incorrect user or/and password is incorrect
            if (user === null) {
                req.flash('error', "Email or/and password doesn't exist")
                res.redirect('/users/login')
            }
            bcrypt.compare(req.body.password, user.password)
                .then((success) => {
                    if (success) {
                        req.session.user = user
                        console.log('!!!!!!!!!!!!!!!!!!!!')
                        console.log(req.session.user)
                        // res.json({message: 'succesfully logged in'})
                        res.redirect('/')
                    } else {
                        // res.status(401).json({ error: 'incorrect password' })
                        req.flash('error', 'Wrong password')
                        res.redirect('/users/login')
                    }
                    // console.log('test')
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
                // console.log(req.session.user)
                res.redirect('/')
            }
        })
})

// GET home page.
router.get('/signup', function (req, res, next) {
    // console.log('test')
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

router.get('/logout', (req, res) => {
    // tell express user logged out 
    req.session.user = null;
    // send response of successfyl  
})

router.get('/:id/favorites', (req, res) => {
    db.User.findOne({
        where: {
            id: req.session.User.id
        }
    })
        .then((user) => {
            res.redirect('/favorites')
        })
})

module.exports = router;





// TODO SignUp button goes to /users/signup
// link the button
// TODO Guest button routes to / 
    // ! with login being a guest account