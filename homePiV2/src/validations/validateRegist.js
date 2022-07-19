const { check } = require('express-validator');

const validateRegist = [
    check('nomeCompleto', 'Informe seu nome completo').isString().notEmpty(),
    check('cpf', 'Informe seu CPF').isNumeric().notEmpty(),
    check('email', 'Insira um email válido').isEmail().notEmpty(),
    check('tel', 'Insira um telefone válido').isNumeric().notEmpty()
];

module.exports = validateRegist;