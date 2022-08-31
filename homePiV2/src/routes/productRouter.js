const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/* GET product page. */
router.get("/allProduct", productController.allProducts);
router.get("/createProduct", productController.createProducts);
router.post("/createProduct", productController.createProducts);
router.get("/purchaseClosing", productController.purchaseEnd);

// Order Sucess and Order Track
router.get("/orderSuccess", productController.orderSuccess);
router.get("/orderTrack", productController.orderTrack);

// Products by category
router.get("/productsByCategory", productController.productsByCategory);

module.exports = router;
