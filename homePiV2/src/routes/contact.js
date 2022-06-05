var express = require('express');
const  contato = require('../../controllers/contactControllers');
var router = express.Router();

/* GET contact page. */
router.get('/', contactController.contato);

module.exports = router;