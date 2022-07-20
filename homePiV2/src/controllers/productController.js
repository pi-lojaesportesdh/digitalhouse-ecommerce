
const {Product} = require('../database/models')

// TODO: Criar o controller para a criação de usuários e produtos.

module.exports = {
    async allProducts(req, res){
        const listProducts = await Product.findAll(); //Lista todos os produtos
        // let resultadoProduto = JSON.stringify(produto) 
        return res.render('product/allProduct',{title:"Lista de produtos",listProducts})
    },

    createProducts : (req, res) => {
        res.render('product/createProduct', { title: 'Criação de Produtos'});
    }
}
