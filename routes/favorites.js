var express = require("express");
var router = express.Router();
const db = require('../models')

router.get("/", function (req, res, next) {
    res.render("favorites", { title: "Express" });
});


var express = require('express');
const db = require('../models')
var router = express.Router();
router.post("/:id/add",(req, res)=>{
    db.Recipe.findOrCreate({
        where: {}
    })
})
module.exports=router
