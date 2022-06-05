const controlador =  {
     confirmarPass: function(req, res, next) {
        res.render('recPassConfirm', { title: 'DH-Sports!' });
      }
};

module.exports = controlador