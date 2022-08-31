const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const categoriesController = require("../controllers/categoriesController");

router.get("/category", categoriesController.categories);
router.post("/category", categoriesController.createCategories);

router.get("/admin", adminController.adminLog);
router.get("/adminProduct", adminController.adminProducts);
router.get("/adminUpdate/:id", adminController.adminUpdate);
router.post("/adminUpdate/:id", adminController.adminUpdatePost);
router.delete("/adminUpdate/:id", adminController.adminDelete);
router.get("/allProducts", adminController.allProducts);

module.exports = router;
