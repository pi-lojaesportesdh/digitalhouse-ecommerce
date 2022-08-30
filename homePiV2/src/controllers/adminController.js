const db = require("../database/models");

module.exports = {
  adminLog: (req, res) => {
    res.render("admin", { title: "Olá admin", userEmail: req.cookies.email });
  },
  adminProducts: async (req, res) => {
    res.render("product/adminProduct", {
      title: "Olá Admin, você está logado!",
      userEmail: req.cookies.email,
    });
  },

  adminUpdate: async (req, res) => {
    const { id } = req.params;
    const productById = await db.Product.findByPk(id);

    res.render("admin/adminProduct", {
      title: "Alterar produto",
      userEmail: req.cookies.email,
      productById,
    });
  },

  adminUpdatePost: async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;

    const updateProduct = await db.Product.update(
      {
        name,
        description,
        price,
      },
      { where: { id: id } }
    );
  },

  adminDelete: async (req, res) => {
    const { id } = req.params;
    console.log(req.body);

    const deleteProduct = await db.Product.destroy({ where: { id } });
  },

  allProducts: async (req, res) => {
    const produtos = await db.Product.findAll();

    res.render("admin/allProducts", {
      title: "Produtos",
      userEmail: req.cookies.email,
      produtos,
    });
  },
};
