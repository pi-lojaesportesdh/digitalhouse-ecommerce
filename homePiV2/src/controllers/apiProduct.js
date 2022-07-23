const db = require('../database/models');
listar = async (req, res) => {
  //Buscar todos os produtos do banco
  try {
    const produtos = await db.Product.findAll();
    res.render('partials/listProducts', {teste: 'Teste do macaco louco'})
  } catch (err) {
    console.error('Erro ao tentar executar consulta:', { err });
    res.status(500).json({ error: 'Houve um erro ao acessar os produtos' });
  }
}

// Detalhar um produto específico do banco de dados
detalhar = async (req, res) => {
    try {
      const {id} = req.params;
      const produtos = await db.Product.findByPk(id);
      res.status(200).json(produtos)
    }
    catch (err) {
      res.status(500).json({ error: 'Houve um erro ao detalhar o produto' });
    }
  }
  
  
  
  // Criar um livro no banco de dados
  criar = async (req, res) => {
    try {
      const createProduct = await db.Product.create(req.body) 
      res.status(201).json(createProduct)
    }catch (err) {
      res.status(500).json({error: 'Houve um erro ao criar o produto'})
    }
  }
  
  
  
  // Excluir um livro do banco de dados
  excluir = async (req, res) => {
    try {
      const {id} = req.params;
      const deleteProduct = await db.Product.destroy({
        where: {id}
      })
      res.json(deleteProduct)
    }
    catch(err) {
      res.status(500).json({error: 'Houve um erro ao excluir o produto'});
    }
  }
  
  
  
  // Alterar todos os campos de um livro
  alterar = async (req, res) => {
    const {id} = req.params;
    try {
      const alterProduct = await db.Product.update(req.body ,{
        where: {id}
      })
      res.json(alterProduct)
    }
    catch (err) {
      res.status(500).json({error: `Houve um erro ao alterar o produto`})
    }
  }



  module.exports = { listar, detalhar, criar, excluir, alterar };