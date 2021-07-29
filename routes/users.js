var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.json({message: 'success'});
});

module.exports = router;
