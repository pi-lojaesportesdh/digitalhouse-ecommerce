var express = require('express');
var router = express.Router();
const mudanca = require ('../../controllers/exchangeControllers')
/* GET exchangePolicy page. */
router.get('/', exchangeControllers.mudanca);

module.exports = router;