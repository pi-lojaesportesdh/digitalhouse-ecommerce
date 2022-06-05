var express = require('express');
var router = express.Router();
const usuarios = require ('../../controllers/usersControllers')

/* GET users listing. */
router.get('/', usersControllers.usuarios);

module.exports = router;
