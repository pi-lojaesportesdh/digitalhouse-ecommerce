const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const multerMidd = require('../middlewares/upLoadImg')

/* GET product page. */
router.get('/allProduct', productController.allProducts)
router.get('/createProduct', productController.createProducts);
router.post('/createProduct',multer(multerMidd).single('imgProduct'), productController.createProducts);
router.get('/purchaseClosing', productController.purchaseEnd);
router.post('/purchaseClosing', productController.purchaseEnd);

// TODO: Rota para a criação de produtos

module.exports = router;