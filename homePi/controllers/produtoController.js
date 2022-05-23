const produtoController = {
    listProduto: (req, res) => {
      res.render("produtos");
    },
    detailProduto: (req, res) => {
        res.render("produtos-detalhe");
    }
  };
  
  module.exports = produtoController;