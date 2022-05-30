var express = require('express');
var router = express.Router();

/* GET privacy page. */
router.get('/', function(req, res, next) {
  res.render('termsUse', { title: 'DH-Sports!' });
});

module.exports = router;