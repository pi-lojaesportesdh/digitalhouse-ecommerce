const userRepository = require('../database/seeders/UserCreate');
const bcrypt = require('bcrypt')

module.exports = {

    // GET
    login : (req, res)  => {
        return res.render('login', { title: 'Login' });
    },

    // POST LOGIN *VERIFICAÇÃO DE USUÁRIO DENTRO DO "BANCO DE DADOS"
    loginPost : (req, res) => {
        const {email, password} = req.body;
        let dataUserToLogin = userRepository.findUserByField('email', email);

        // verificando se há email
        if(dataUserToLogin){
            // verificando se a senha encriptada coincide com a senha recebida do body
            let isPasswordVerified = bcrypt.compareSync(password, dataUserToLogin.passwordEncrypted)

            // Se a senha coincidir ele irá fazer isso
            if(isPasswordVerified){
                delete dataUserToLogin.senha;
                res.send('Autenticado com sucesso')
            }   

            if(!isPasswordVerified){
                res.send('Email ou senha incorreto.')
            }
        }


        if(!dataUserToLogin){
            res.send('Infelizmente você não tem conta malandro. Vai fazer uma conta pra já!!!')
        }
    },

    //GET 
    registration : (req, res) => {
        res.render ('registration', { title: 'Cadastro'})
    },

    // POST (registro no banco de dados)
    registrationPost: (req, res) => {
        // Pegando os dados do body 
        const {nomeCompleto, cpf, dataNascimento, email, tel, password} = req.body;
        // Criptografando a senha
        const passwordEncrypted = bcrypt.hashSync(password, 12);

        // Criando utilizando o seeder o usuário e enviando para o users.json.
        let user = userRepository.create({nomeCompleto, cpf, dataNascimento, email, tel, passwordEncrypted});
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