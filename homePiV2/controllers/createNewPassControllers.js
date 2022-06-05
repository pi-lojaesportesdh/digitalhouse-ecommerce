const controlador = {
    createNewPass: function(req, res, next) {
    res.render('createNewPass', { title: 'DH-Sports!' });
  },
};

module.exports = controlador