const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Importar Validações


/* GET product page. */
router.get('/allProduct', productController.allProducts)
router.get('/createProduct', productController.createProducts);

module.exports = router;