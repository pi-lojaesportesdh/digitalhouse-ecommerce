const controlador = {
    contato: function(req, res, next) {
        res.render('contact', { title: 'DH-Sports!' });
      },
};

module.exports = controlador