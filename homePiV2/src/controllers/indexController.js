const { validationResult } = require('express-validator');
const db = require('../database/models');

module.exports = {
    index : async (req, res)  => {
        const produtos = await db.Product.findAll();

        res.render('index', {
            produtos, 
            title: 'DH_Sports' });
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