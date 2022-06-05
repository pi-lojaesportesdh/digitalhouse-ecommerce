var express = require('express');
var router = express.Router();
const gravarSenha = require('../../controllers/recPasswordControllers')
/* GET login page. */
router.get('/', recPasswordControllers.gravarSenha);

module.exports = router;