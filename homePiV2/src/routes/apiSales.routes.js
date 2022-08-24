const express = require("express");
const router = express.Router();

const apiCloseSale = require("../controllers/apiCloseSale");

router.post("/purchaseClosing", apiCloseSale.createSale);

module.exports = router;
