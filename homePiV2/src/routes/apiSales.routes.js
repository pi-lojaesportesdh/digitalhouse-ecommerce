const express = require("express");
const router = express.Router();

const apiCloseOrder = require("../controllers/apiCloseOrder");

router.post("/purchaseClosing", apiCloseOrder.createOrder);
router.get("/order", apiCloseOrder.Order);

module.exports = router;
