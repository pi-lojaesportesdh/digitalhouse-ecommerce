const userRepository = require('../database/seeders/UserCreateApi');
const bcrypt = require('bcrypt')

module.exports = {

    // GET
    login : (req, res)  => {
        return res.render('login', { title: 'Login' });
    },

    //GET 
    registration : (req, res) => {
        res.render ('registration', { title: 'Cadastro'})
    },


    //POST 
    // registConfirm : (req,res) => {
    //     const errors = validationResult(req, res);
    //     console.log("Os erros: ",errors);

    //     if (errors.isEmpty()) {
    //         res.render('registConfirm', { title: 'Cadastrado com Sucesso!' });

    //     }else {
    //         res.render('registration', { 
    //             errors: errors.mapped(),
    //             title : 'OPS!'});
    //     }
    // },
}