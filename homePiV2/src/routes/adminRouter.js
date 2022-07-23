const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.adminLog)
router.get('/adminProduct',adminController.adminProducts)

module.exports = router;
