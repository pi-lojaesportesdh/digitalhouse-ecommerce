const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

/* GET cart page. */
router.get('/shoppingCart', cartController.cartPage)

module.exports = router;