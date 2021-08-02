var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

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

