var express = require('express');
var router = express.Router();
const index = require ('../../controllers/indexControllers')

/* GET home page. */
router.get('/', indexControllers.index);

module.exports = router;
