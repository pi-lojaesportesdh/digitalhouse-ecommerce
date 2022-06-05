const controlador = {
    mudanca:  function(req, res, next) {
        res.render('exchangePolicy', { title: 'DH-Sports!' });
      },
};

module.exports = controlador