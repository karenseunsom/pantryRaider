var express = require('express');
const db = require('../models');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
  console.log(req.session.user)
});

router.get('/recipes', function(req, res, next) {
  res.render('recipes', {
    title: 'Recipes'
  })
});

module.exports = router;

