var express = require('express');
var router = express.Router();

/* GET exchangePolicy page. */
router.get('/', function(req, res, next) {
  res.render('createNewPassConfirm', { title: 'DH-Sports!' });
});

module.exports = router;