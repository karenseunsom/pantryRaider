var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

// POST home page for the favorite button
router.post('/', function(req, res, next) {
  // add the checkAuth to the page before going to the home page as we are requiring them to sign in first before using the app
  // make the db chart
  // make new line for each favorites
  console.log('im working')
//   db.Favorite.create({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: hash
// })
//     // respond with success and rout to the search page 
//     .then((user) => {
//         req.flash('success', 'Account successfully created')
//         // res.status(201).json(user)
//         // todo redirect after submit to the results page
//         res.redirect('/users/signup')
//     })
  
})

// GET favorites page.
router.get('/favorites', function(req, res, next) {
  res.render('favorites', { title: 'Express' });
});

router.get('/recipes', function(req, res, next) {
  res.render('recipes', {
    title: 'Recipes'
  })
});

module.exports = router;

