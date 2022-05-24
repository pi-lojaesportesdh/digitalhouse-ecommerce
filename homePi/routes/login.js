var express = require("express");
var router = express.Router();
const loginController = require("../controllers/loginController");

router.get("/", loginController.areaLogin);
router.get("/", loginController.acaoEnviar);

module.exports = router;
