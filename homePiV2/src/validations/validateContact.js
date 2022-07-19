const { check } = require('express-validator');

const validateContact = [
    check('nome', 'Informe seu nome completo').isString().notEmpty(),
    check('email', 'Insira um email válido').isEmail().notEmpty(),
    check('mensagem', 'Digite sua mensagem!').notEmpty()
];

module.exports = validateContact;