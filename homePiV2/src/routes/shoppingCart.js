var express = require('express');
var router = express.Router();
const cartShopping = require ('../../controllers/shoppingCartControllers')

/* GET resgistration page. */
router.get('/', shoppingCartControllers.cartShopping);

module.exports = router;