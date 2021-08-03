var express = require('express');
const db = require('../models');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
  console.log(req.session.user)
});

// POST home page for the favorite button
// router.post('/', function(req, res, next) {
//   // console.log('im working')
//   // console.log(req.session.user.id)
//   const userSessionId = req.session.user.id
//   db.User.findByPk(userSessionId)
//   .then((user) => {
//     // console.log(user)
//     db.Favorite.create({
//       UserId: userSessionId,
//       DishId: '',
//     })
//   })
// })

// GET favorites page.
// router.get('/favorites', function(req, res, next) {
//   res.render('favorites', { title: 'Express' });
// });

router.get('/recipes', function(req, res, next) {
  res.render('recipes', {
    title: 'Recipes'
  })
});

module.exports = router;

