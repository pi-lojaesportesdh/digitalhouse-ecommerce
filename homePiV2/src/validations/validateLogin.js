const { check } = require('express-validator');

const validateLogin = [
    check('password').notEmpty(),
    check('email', 'Insira um email válido').isEmail().notEmpty(),
];

module.exports = validateLogin;