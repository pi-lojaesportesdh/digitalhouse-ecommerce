const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

//Importar Validações
const validateRegist = require('../validations/validateRegist');
const validateContact = require('../validations/validateContact');

router.get('/', indexController.index);

router.get('/registration', indexController.registration);
router.post('/registConfirm',validateRegist, indexController.registConfirm);

router.get('/login', indexController.login);
router.get('/privacy', indexController.privacy);
router.get('/termsUse', indexController.termsUse);
router.get('/exchangePolicy',indexController.exchangePolicy);

router.get('/contact', indexController.contact);
router.post('/contactConfirm',validateContact, indexController.contactConfirm);

module.exports = router;
