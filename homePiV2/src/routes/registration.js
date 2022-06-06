var express = require('express');
var router = express.Router();

/* GET resgistration page. */
router.get('/',function(req, res, next) {
    res.render('registration', { title: 'DH-Sports!' });
  });

module.exports = router;