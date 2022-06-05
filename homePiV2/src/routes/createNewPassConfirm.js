var express = require('express');
var router = express.Router();
const confirmarCriacao = require('../../controllers/createNewPassConfirmControllers')

/* GET exchangePolicy page. */
router.get('/', createNewPassConfirmControllers.confirmarCriacao);

module.exports = router;