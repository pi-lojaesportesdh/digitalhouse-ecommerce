const controlador = {
          cadastro: function(req, res, next) {
            res.render('registration', { title: 'DH-Sports!' });
          }
};

module.exports = controlador