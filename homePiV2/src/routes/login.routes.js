const express = require('express');
const router = express.Router();

// Controller Login
const loginController = require('../controllers/loginController')

// Validações
const validateRegist = require('../validations/validateRegist');

// Login POST


//LOGIN
router.get('/login', loginController.login);
router.post('/login', loginController.loginPost)

// REGISTRO
router.get('/registration', loginController.registration);

// POST?
router.post('/registConfirm', validateRegist, loginController.registConfirm);

module.exports = router;