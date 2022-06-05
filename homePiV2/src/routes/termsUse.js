var express = require('express');
var router = express.Router();
const termosDeUso = require ('../../controllers/termsUseControllers')

/* GET privacy page. */
router.get('/', termsUseControllers.termosDeUso);

module.exports = router;