var express = require('express');
var router = express.Router();


/* GET login page. */
router.get('/', function(req, res) {
    res.render('recPassConfirm', { title: 'DH-Sports!' })
  });

module.exports = router;