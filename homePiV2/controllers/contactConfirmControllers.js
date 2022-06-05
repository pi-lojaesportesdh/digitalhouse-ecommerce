const controlador = {
    confirmacaoContato:  function(req, res, next) {
        res.render('contactConfirm', { title: 'DH-Sports!' });
      },
};

module.exports = controlador