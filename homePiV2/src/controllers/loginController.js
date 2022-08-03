const db = require('../database/models')


module.exports = {

    // GET
    login : (req, res)  => {
        return res.render('login', { title: 'Login' });
    },

    loginPost : async (req, res) => {
        let {email, senha} = req.body
        const user = await db.Users.findOne({where: {email}})
        
        if(!user){
            return res.status(400).json({message: 'Email não existem!'})
        }

        console.log(typeof user.senha)
        
        if(user.senha !== senha){
            return res.status(400).json({message: 'Email ou senha não existem!'})
        }
        
        return res.json(`Olá ${email}`)

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