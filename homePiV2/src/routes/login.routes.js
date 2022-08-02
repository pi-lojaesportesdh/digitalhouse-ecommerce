const express = require('express');
const router = express.Router();

// Controller Login
const loginController = require('../controllers/loginController')

// Validações
const validateRegist = require('../validations/validateRegist');


//LOGIN
router.get('/login', loginController.login);


// REGISTRO
router.get('/registration', loginController.registration);

// POST?
//router.post('/registConfirm', validateRegist, loginController.registConfirm);

module.exports = router;