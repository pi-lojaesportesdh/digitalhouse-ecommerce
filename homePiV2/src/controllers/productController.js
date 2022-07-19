const { validationResult } = require('express-validator');

module.exports = {
    allProducts : (req, res) => {
        res.render('product/allProduct', { title: 'Todos os produtos'})
    },

    createProducts : (req, res) => {
        res.render('product/createProduct', { title: 'Criação de Produtos'});
    }
}
