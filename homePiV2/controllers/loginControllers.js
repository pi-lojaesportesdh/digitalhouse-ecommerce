const controlador = {
          login: function(req, res, next) {
            res.render('login', { title: 'DH-Sports!' });
          }
};

module.exports = controlador
