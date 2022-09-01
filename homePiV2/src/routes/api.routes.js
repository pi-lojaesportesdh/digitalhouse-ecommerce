const express = require("express");
const router = express.Router();

const apiController = require("../controllers/apiProduct");
const uploadImg = require("../middlewares/uploadImg");

router.get("/api", apiController.listar);
router.get("/api/:id", apiController.detalhar);

router.post("/api", uploadImg.upload.single("imgProduct"), apiController.criar);

router.delete("/api/:id", apiController.excluir);
router.put("/api/:id", apiController.alterar);

module.exports = router;
