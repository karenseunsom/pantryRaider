var express = require("express");
var router = express.Router();
const db = require('../models')

router.get("/", function (req, res, next) {
    res.render("favorites", { title: "Express" });
});

module.exports = router