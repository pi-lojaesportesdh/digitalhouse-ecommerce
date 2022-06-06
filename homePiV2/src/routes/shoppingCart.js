var express = require('express');
var router = express.Router();

/* GET resgistration page. */
router.get('/', function(req, res, next) {
    res.render('shoppingCart', { title: 'DH-Sports!' });
  },);

module.exports = router;