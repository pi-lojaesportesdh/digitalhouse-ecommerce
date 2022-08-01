const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const productController = require('../controllers/productController');


//Importar Validações
const validateContact = require('../validations/validateContact');

router.get('/', indexController.index);



router.get('/privacy', indexController.privacy);
router.get('/termsUse', indexController.termsUse);
router.get('/exchangePolicy',indexController.exchangePolicy);

router.get('/contact', indexController.contact);
router.post('/contactConfirm',validateContact, indexController.contactConfirm);

module.exports = router;
