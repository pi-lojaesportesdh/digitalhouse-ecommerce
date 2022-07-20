
const Produto = require('../database/models/Product')

// TODO: Criar o controller para a criação de usuários e produtos.

module.exports = {
    async allProducts(req, res){
        const produto = await Produto.findAll(); //Lista todos os produtos
        // let resultadoProduto = JSON.stringify(produto) 
        return console.log(produto )
    },

    createProducts : (req, res) => {
        res.render('product/createProduct', { title: 'Criação de Produtos'});
    }
}
