var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({message: 'success'});
});

module.exports = router;
