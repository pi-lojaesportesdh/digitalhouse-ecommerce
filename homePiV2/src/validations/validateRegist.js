const { check } = require('express-validator');

const validateRegist = [
    check('nomeCompleto', 'Informe seu nome completo').isString().notEmpty(),
    check('cpf', 'Informe seu CPF').isNumeric().notEmpty(),
    check('email', 'Insira um email válido').isEmail().notEmpty(),
    check('tel', 'Insira um telefone válido').isNumeric().notEmpty(),
    check('date', 'Insira sua data de nascimento').isDate().notEmpty(),
    check('cpf', 'Insira um cpf válido').isNumeric().notEmpty(),
    check('number', 'Insira um número válido').isNumeric().notEmpty(),
    check('complement').isString().notEmpty(),
    check('reference').isString().notEmpty(),
    check('password', 'Insira uma senha forte').isStrongPassword().notEmpty()
];

module.exports = validateRegist;