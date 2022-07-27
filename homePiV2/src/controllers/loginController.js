const userRepository = require('../database/seeders/UserCreate');


module.exports = {

    // GET
    login : (req, res)  => {
        return res.render('login', { title: 'Login' });
    },

    //GET 
    registration : (req, res) => {
        res.render ('registration', { title: 'Cadastro'})
    },

    // POST (registro no banco de dados)
    registrationPost: (req, res) => {
        const dataUser = req.body;
        let user = userRepository.create(dataUser);
        if(user){
            return res.render('registConfirm', {title: 'Cadastrado com sucesso'});
        }
        return;
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