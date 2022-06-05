const controlador = {
            gravarSenha:  function(req, res, next) {
                res.render('recPassword', { title: 'DH-Sports!' });
              },
};

module.exports = controlador