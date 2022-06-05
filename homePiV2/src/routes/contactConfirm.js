var express = require('express');
var router = express.Router();
const confirmacaoContato = require ('../../controllers/contactConfirm')
/* GET contact page. */
  router.get('/', contactConfirm.confirmacaoContato);

module.exports = router;