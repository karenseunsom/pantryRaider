var express = require("express");
var router = express.Router();
const db = require('../models')


router.get("/", function (req, res, next) {
    db.Favorite.findAll({
        where:{UserId:req.session.user.id},
        include:[db.Dish]
    })
    .then(favorites=>{
        res.render("favorites", { title: "Express", favorites });

    })
});





module.exports=router
