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

module.exports = { categories, createCategories };
