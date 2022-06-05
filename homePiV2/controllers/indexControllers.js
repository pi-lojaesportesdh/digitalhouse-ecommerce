const controlador = {
          index: function(req, res, next) {
            res.render('index', { title: 'DH-Sports!' });
          }
};
module.exports = controlador