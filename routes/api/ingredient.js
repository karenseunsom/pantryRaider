var express = require('express');
var router = express.Router();
const db = require('../../models')

// GET ingredients page 
router.get('/ingredients', (req, res) => {
    // db.Ingredients.findAll()
    //     .then((ingredient) => {
    //         res.json(ingredient)
    //     })
    res.json(db.Ingredients.findAll())
})