
const db = require('../models')
var express = require('express');
const session = require('express-session')
var router = express.Router();

router.get("/", function (req, res, next) {
    db.Dish.findAll({
        include: [db.Ingredient]
    })
    .then(dishes => {
        res.render('cheffavs', {
            title: 'Chef Favs',
            dishes: dishes
        })
    })
});

module.exports = router