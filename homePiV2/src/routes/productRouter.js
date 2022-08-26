const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/* GET product page. */
router.get("/allProduct", productController.allProducts);
router.get("/createProduct", productController.createProducts);
router.post( "/createProduct", productController.createProducts);
router.get("/purchaseClosing", productController.purchaseEnd);
router.get("/orderSuccess", productController.orderSuccess);
router.get("/orderTrack", productController.orderTrack);

// TODO: Rota para a criação de produtos

module.exports = router;
