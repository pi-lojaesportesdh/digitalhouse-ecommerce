var express = require('express');
var router = express.Router();
const confirmarRegistro = require ('../../controllers/registConfirmControllers')

/* GET registConfirm page. */
router.get('/', registConfirmControllers.confirmarRegistro);

module.exports = router;