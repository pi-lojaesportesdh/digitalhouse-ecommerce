const controlador = {
           confirmarRegistro: function(req, res, next) {
            res.render('registConfirm', { title: 'DH-Sports!' });
          },
};

module.exports = controlador