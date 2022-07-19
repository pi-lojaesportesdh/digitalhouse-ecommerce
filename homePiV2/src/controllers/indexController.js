const { validationResult } = require('express-validator');

module.exports = {
    index : (req, res)  => {
        res.render('index', { title: 'DH-Sports' });
    },
    login : (req, res)  => {
        return res.render('login', { title: 'Login' });
    },
    registration : (req, res) => {
        res.render ('registration', { title: 'Cadastro'})
    },
    registConfirm : (req,res) => {
        const errors = validationResult(req, res);
        if (errors.isEmpty()) {
            res.render('registConfirm', { title: 'Cadastrado com Sucesso!' });

        }else {
            res.render('registration', { 
                errors: errors.mapped(),
                title : 'OPS!'});
        }
    },
    privacy : (req, res)  => {
        res.render('privacy', { title: 'Politica de Privacidade' });
    },
    termsUse : (req, res)  => {
        res.render('termsUse', { title: 'Termos de Uso' });
    },
    exchangePolicy : (req, res)  => {
        res.render('exchangePolicy', { title: 'Politica de troca' });
    },
    contact : (req, res)  => {
        res.render('contact', { title: 'Entre em contato' });
    },
    contactConfirm : (req, res)  => {
        const errors = validationResult(req, res);
        if (errors.isEmpty()) {
            res.render('contactConfirm', { title: 'Mensagem enviada!' });

        }else {
            res.render('contact', { 
                errors: errors.mapped(),
                title : 'OPS!'});
        }
    }
};