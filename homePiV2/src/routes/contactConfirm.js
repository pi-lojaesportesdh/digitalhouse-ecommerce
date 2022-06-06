var express = require('express');
var router = express.Router();

/* GET contact page. */
  router.get('/', function(req, res, next) {
    res.render('contactConfirm', { title: 'DH-Sports!' });
  });

module.exports = router;