const express = require("express");
const router = express.Router();

const apiCloseOrder = require("../controllers/apiCloseOrder");

router.post("/purchaseClosing", apiCloseOrder.createOrder);

module.exports = router;
