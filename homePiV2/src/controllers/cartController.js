const {listProducts} = require('../controllers/productController')

module.exports = {
    cartPage : (req, res) => {
        res.render('shoppingCart', { title: 'Seu carrinho'})
    }
}



