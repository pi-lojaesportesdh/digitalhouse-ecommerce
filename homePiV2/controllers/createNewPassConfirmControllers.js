const controlador = {
    confirmacaoCriacao:  function(req, res, next) {
        res.render('createNewPassConfirm', { title: 'DH-Sports!' });
      },
};

module.exports = controlador