// TODO: Criar o controller para a criação de usuários e produtos.

module.exports = {
  async allProducts(req, res) {
    const listProducts = await Product.findAll(); //Lista todos os produtos
    // const id = await Product.findByPk();
    // let resultadoProduto = JSON.stringify(produto)
    return res.render("index", { title: "Lista de produtos", listProducts });
  },

  createProducts: (req, res) => {
    res.render("product/createProduct", {
      title: "Criação de Produtos",
      userEmail: req.cookies.email,
    });
  },

  purchaseEnd: (req, res) => {
    res.render("purchaseClosing", {
      title: "Finalização da compra",
      userEmail: req.cookies.email,
    });
  },
};
