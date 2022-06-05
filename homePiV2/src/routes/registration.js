var express = require('express');
var router = express.Router();
const cadastro = require ('../../controllers/registrationControllers')
/* GET resgistration page. */
router.get('/', registrationControllers.cadastro);

module.exports = router;