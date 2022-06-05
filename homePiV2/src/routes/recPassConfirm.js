var express = require('express');
var router = express.Router();
const confirmarPass = ('../../controllers/recPassConfirmControllers')

/* GET login page. */
router.get('/', recPassConfirmControllers.confirmarPass);

module.exports = router;