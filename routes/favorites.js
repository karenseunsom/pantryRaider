var express = require("express");
var router = express.Router();
const db = require('../models')

router.get("/:id", function (req, res, next) {
    res.render("favorites", { title: "Express" });
});

router.post("/:id", function (req, res, next) {
    res.render("favorites", { title: "Express" });
    db.User.findByPk(req.session.user.id)
    .then((user) => {
        user.addFavorite({id:req.params.id})
        
    })
});

module.exports = router