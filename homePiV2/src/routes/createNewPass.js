var express = require('express');
var router = express.Router();
const createNewPass = require ('../../controllers/createNewPassControllers')

/* GET exchangePolicy page. */
router.get('/', createNewPassControllers.createNewPass);

module.exports = router;