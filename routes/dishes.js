var express = require("express");
var router = express.Router();
const db = require('../models')


router.post("/add-dish", function (req, res, next) {
    console.log('name', req.body.name)
    db.Dish.findOrCreate({
        where: { apiDishId: req.body.apiDishId },
        defaults: {
            apiDishId: req.body.apiDishId,
            name: req.body.name
        }
    }).then(dish => {
        db.Favorite.findOrCreate({
            where: {
                UserId: req.session.user.id,
                DishId: dish[0].dataValues.id
            },
            defaults: {
                UserId: req.session.user.id,
                DishId: dish[0].dataValues.id
            }
        }
        )

    }).then(() => {
        res.json("Fav Added")
    })
});


module.exports = router