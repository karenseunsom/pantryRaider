
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
            dishes: dishes,
            pictures: ['https://www.simplyrecipes.com/thmb/8bfeQhOMj-PNHXl40RpXwGGIUyg=/1600x2397/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__07__2016-08-03-BBQ-Chicken-Bowls-1-abdfac392e3e446094622d8fe51c7161.jpg', 'https://wholeandheavenlyoven.com/wp-content/uploads/2016/04/One-Pan-Roast-Chicken-Asparagus-Fingerling-Potatoes.jpg','https://www.jessicagavin.com/wp-content/uploads/2015/09/chicken-piccata-pin.jpg','https://houseofnasheats.com/wp-content/uploads/2021/01/Fettuccine-Alfredo-23.jpg','https://tidbits-marci.com/wp-content/uploads/2020/09/LR-Chicken-Cordon-Bleu-Pasta-1278.jpg','https://i.pinimg.com/originals/7d/5b/86/7d5b8653a01f1aa4f0685817b7a9e7f6.jpg','https://gimmedelicious.com/wp-content/uploads/2019/01/Quick-Chicken-Tacos-food-truck-style-4.jpg','https://www.spendwithpennies.com/wp-content/uploads/2016/06/Dill-Pickle-Bacon-Grilled-Cheese-22-1.jpg', 'https://s23209.pcdn.co/wp-content/uploads/2012/11/Greek-Yogurt-Chicken-Salad-SandwichIMG_0271edit.jpg', 'https://juliasalbum.com/wp-content/uploads/2020/03/Arugula-Tomato-Salad-2.jpg', 'https://i.redd.it/o84z9yfjtv401.jpg', 'https://www.westviamidwest.com/wp-content/uploads/2018/05/Tender-Babyback-Ribs-West-Via-Midwest-13-681x1024.jpg', 'https://letsdishrecipes.com/wp-content/uploads/2019/07/Foil-Pack-Steak-Fajitas-feature.jpg', 'https://kitchenswagger.com/wp-content/uploads/2019/01/chimichurri-steak-frites4.jpg'],
        })
    })
});

module.exports = router