var express = require('express');
var router = express.Router();
const login = require ('../../controllers/loginControllers')

/* GET login page. */
router.get('/', loginControllers.login );

module.exports = router;