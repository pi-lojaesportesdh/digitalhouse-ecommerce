const db = require("../database/models");

categories = (req, res) => {
  res.render("admin/createCategory", {
    title: "Criar categoria",
    userEmail: req.cookies.email,
    emailAdmin: req.cookies.emailAdmin,
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
    userEmail: req.cookies.email,
    emailAdmin: req.cookies.emailAdmin,
  });
};

editCategories = async (req, res) => {
  const { id } = req.params;
  const categoryById = await db.Category.findByPk(id);

  res.render("admin/editCategory", {
    title: "Edição de categorias",
    userEmail: req.cookies.email,
    categoryById,
    emailAdmin: req.cookies.emailAdmin,
  });
};

editCategoriesPost = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;

  const updateCategory = await db.Category.update(
    {
      name,
    },
    { where: { id } }
  );
};

deleteCategories = async (req, res) => {
  const { id } = req.params;

  const deleteCategorie = await db.Category.destroy({ where: { id } });
};

module.exports = {
  categories,
  createCategories,
  allCategories,
  editCategories,
  editCategoriesPost,
  deleteCategories,
};
