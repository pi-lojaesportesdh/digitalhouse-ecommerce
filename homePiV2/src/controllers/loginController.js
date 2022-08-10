const db = require('../database/models')


module.exports = {

    // GET
    login : (req, res)  => {
        return res.render('login', { title: 'Login' });
    },

    loginPost : async (req, res) => {
        let {email, password} = req.body
        const user = await db.Users.findOne({where: {email}})
            
        console.log(user.email)

        if(!user){
            return res.status(400).json({message: 'Email ou senha não correspondem!'})
        }
        
        if(user.password !== password){
            return res.status(400).json({message: 'Email ou senha não correspondem!'})
        }
        
        return res.json(`Olá ${user.name}`)

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