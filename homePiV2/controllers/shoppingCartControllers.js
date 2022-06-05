const controlador = {
           cartShopping: function(req, res, next) {
            res.render('shoppingCart', { title: 'DH-Sports!' });
          },
};

module.exports = controlador