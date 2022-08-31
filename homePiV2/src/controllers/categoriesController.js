const db = require("../database/models");

categories = (req, res) => {
  res.render("admin/createCategory", {
    title: "Criar categoria",
    userEmail: req.cookies.email,
  });
};

createCategories = async (req, res) => {
  const data = req.body;

  const createCategory = await db.Category.create(data);
};

allCategories = async (req, res) => {
  const categories = await db.Category.findAll();

    res.render("admin/allCategories", {
      categories,
      title: "Categorias cadastradas",
      userEmail: req.cookies.email
    })
};

editCategories = (req, res) => {
  res.render("admin/editCategory", {
    title: "Edição de categorias",
    userEmail: req.cookies.email
  })
};

module.exports = { categories, createCategories, allCategories, editCategories };
