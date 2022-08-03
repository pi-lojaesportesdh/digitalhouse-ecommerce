const express = require('express');
const router = express.Router();

// Controller Login
const loginController = require('../controllers/loginController')

// Validações
const validateRegist = require('../validations/validateRegist');

// Login POST
const UserCreateApi = require('../database/seeders/UserCreateApi');

//LOGIN
router.get('/login', loginController.login);
router.post('/login', UserCreateApi.login)

// REGISTRO
router.get('/registration', loginController.registration);

// POST?
//router.post('/registConfirm', validateRegist, loginController.registConfirm);

module.exports = router;