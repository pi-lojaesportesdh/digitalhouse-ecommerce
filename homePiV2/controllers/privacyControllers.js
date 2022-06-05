const controlador = {
         privacidade:  function(req, res, next) {
            res.render('privacy', { title: 'DH-Sports!' });
          }
};

module.exports = controlador