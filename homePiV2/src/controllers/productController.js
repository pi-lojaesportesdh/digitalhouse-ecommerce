const { validationResult } = require('express-validator');

// TODO: Criar o controller para a criação de usuários e produtos.


module.exports = {
    allProducts : (req, res) => {
        res.render('product/allProduct', { title: 'Todos os produtos'})
    },

    createProducts : (req, res) => {
        res.render('product/createProduct', { title: 'Criação de Produtos'});
    }
}
