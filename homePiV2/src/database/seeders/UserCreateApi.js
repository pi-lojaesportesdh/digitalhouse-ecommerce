const db = require('../models');
const bcrypt = require('bcrypt')
// Responsável por realizar a criação de usuários dentro do futuro banco de dados
// (Modelagem do banco de dados de usuários precisa ser feita para a criação de usuários ser possível)
// Verificando a possibilidade de realizar a criação de usuários através de uma API.

listar = async (req, res) => {
  //Buscar todos os usuários do banco
  try {
    const users = await db.Users.findAll();
    res.status(200).json(users)
  } catch (err) {
    console.error('Erro ao tentar executar consulta:', { err });
    res.status(500).json({ error: 'Houve um erro ao acessar os usuários' });
  }
}

// Detalhar um usuário específico do banco de dados
detalhar = async (req, res) => {
    try {
      const {id} = req.params;
      const userById = await db.Users.findByPk(id);
      res.status(200).json(userById)
    }
    catch (err) {
      res.status(500).json({ error: 'Houve um erro ao detalhar o usuário' });
    }
  }
  

  
//   // Criar um usuário no banco de dados
  criar = async (req, res) => {
    let {name, email, senha} = req.body


    try {
      const createUser = await db.Users.create({name, email, senha}) 
      res.status(200).json(createUser)
    }catch (err) {
      res.status(500).json({error: 'Houve um erro ao criar o usuário'})
    }
  }
  
  
  
//   // Excluir um usuário do banco de dados
  excluir = async (req, res) => {
    try {
      const {id} = req.params;
      const deleteUser = await db.Users.destroy({
        where: {id}
      })
      res.json(deleteUser)
    }
    catch(err) {
      res.status(500).json({error: 'Houve um erro ao excluir o usuário'});
    }
  }
  
  
  
//   // Alterar todos os campos de um livro
//   alterar = async (req, res) => {
//     const {id} = req.params;
//     try {
//       const alterProduct = await db.Product.update(req.body ,{
//         where: {id}
//       })
//       res.json(alterProduct)
//     }
//     catch (err) {
//       res.status(500).json({error: `Houve um erro ao alterar o produto`})
//     }
//   }




module.exports = {listar, detalhar, criar, excluir};