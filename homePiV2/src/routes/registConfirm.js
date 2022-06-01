var express = require('express');
var router = express.Router();

/* GET registConfirm page. */
router.get('/', function(req, res, next) {
  res.render('registConfirm', { title: 'DH-Sports!' });
});

module.exports = router;