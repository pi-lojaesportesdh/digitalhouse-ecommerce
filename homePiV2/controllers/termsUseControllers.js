const controlador = {
         termosDeUso: function(req, res, next) {
            res.render('termsUse', { title: 'DH-Sports!' });
          }
};

module.exports = controlador