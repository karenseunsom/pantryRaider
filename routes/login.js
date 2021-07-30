var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../models');


// GET home page.
// router.get('/login', function(req, res, next) {
//     res.render('login', { title: 'Express' });
// });

// router.post('/login', function(req, res, next) {
//     db.User.findOne({
//         where: {
//             email: req.body.email
//         }
//     })
//         .then((user) => {
//             bcrypt.compare(req.body.password, user.password)
//                 .then((success) => {
//                     if (success) {
//                         req.session.user = user
//                         // res.json({message: 'succesfully logged in'})
//                         res.redirect('/')
//                     } else {
//                         res.status(401).json({error: 'incorrect password'})
//                     }
//                 })
//         })
// })


module.exports = router;