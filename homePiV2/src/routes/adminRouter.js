const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const categoriesController = require("../controllers/categoriesController");

const uploadImg = require("../middlewares/uploadImg");

// Category
router.get("/category", categoriesController.categories);
router.post("/category", categoriesController.createCategories);

router.get("/allCategories", categoriesController.allCategories);
router.post("/allCategories", categoriesController.editCategories);

router.get("/editCategory/:id", categoriesController.editCategories);
router.post("/editCategory/:id", categoriesController.editCategoriesPost);
//delete
router.delete("/editCategory/:id", categoriesController.deleteCategories);

//login admin
router.get("/admin", adminController.adminLog);
router.post("/admin", adminController.adminLoginPost);

//Product
router.get("/adminProduct", adminController.adminProducts);
router.get("/adminUpdate/:id", adminController.adminUpdate);
router.post(
  "/adminUpdate/:id",
  uploadImg.upload.single("imgProduct"),
  adminController.adminUpdatePost
);
router.delete("/adminUpdate/:id", adminController.adminDelete);
router.get("/allProducts", adminController.allProducts);

module.exports = router;
