const db = require("../database/models");

module.exports = {
  adminLog: (req, res) => {
    res.render("admin", {
      title: "Olá admin",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
    });
  },

  adminLoginPost: async (req, res) => {
    let { adminEmail, password } = req.body;
    const userAdmin = await db.Admin.findOne({ where: { adminEmail } });

    if (!userAdmin) {
      return res
        .status(400)
        .json({ message: "Email ou senha não correspondem!" });
    }

    if (userAdmin.password !== password) {
      return res
        .status(400)
        .json({ message: "Email ou senha não correspondem!" });
    }

    res.cookie("emailAdmin", userAdmin.adminEmail);
    res.cookie("idAdmin", userAdmin.id);
    res.redirect("/");
  },

  adminProducts: async (req, res) => {
    res.render("product/adminProduct", {
      title: "Olá Admin, você está logado!",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
    });
  },

  adminUpdate: async (req, res) => {
    const { id } = req.params;
    const productById = await db.Product.findByPk(id);
    const categories = await db.Category.findAll();

    res.render("admin/adminProduct", {
      title: "Alterar produto",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
      productById,
      categories,
    });
  },

  adminUpdatePost: async (req, res) => {
    const { id } = req.params;
    const { name, price, description, category_id } = req.body;
    const imgProduct = req.file?.filename;

    const dataToProduct = {
      name,
      price,
      description,
      category_id,
      imgProduct,
    };

    const updateProduct = await db.Product.update(dataToProduct, {
      where: { id: id },
    });
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
      emailAdmin: req.cookies.emailAdmin,
      produtos,
    });
  },
};
