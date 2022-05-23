var express = require('express');
var router = express.Router();
const carrinhoController = require('../controllers/carrinhoController');

/* GET carrinho page. */
router.get('/', carrinhoController.listCarrinho);

module.exports = router;