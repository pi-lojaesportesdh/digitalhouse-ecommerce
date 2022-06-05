var express = require('express');
var router = express.Router();
const privacidade = require ('./../controlleres/privacyControllers')

/* GET privacy page. */
router.get('/', privacyControllers.privacidade);

module.exports = router;