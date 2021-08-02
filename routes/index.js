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
})

// GET favorites page.
router.get('/favorites', function(req, res, next) {
  res.render('favorites', { title: 'Express' });
});

module.exports = router;

