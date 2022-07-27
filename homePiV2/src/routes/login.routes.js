const express = require('express');
const router = express.Router();


// Controller Login
const loginController = require('../controllers/loginController')

// Validações
const validateRegist = require('../validations/validateRegist');



router.get('/login', loginController.login);
router.get('/registration', loginController.registration);
router.post('/registration', loginController.registrationPost);

// POST?
//router.post('/registConfirm', validateRegist, loginController.registConfirm);

module.exports = router;