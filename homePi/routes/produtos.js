var express = require('express');
var router = express.Router();
const produtoController = require('../controllers/produtoController');

/* GET produtos page. */
router.get('/', produtoController.listProduto);
router.get('/detalhe', produtoController.detailProduto);

module.exports = router;