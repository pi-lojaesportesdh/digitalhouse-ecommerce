const db = require("../database/models");

listar = async (req, res) => {
  //Buscar todos os produtos do banco
  try {
    const produtos = await db.Product.findAll();
    res.render("partials/listProducts", { teste: "Sucesso" });
  } catch (err) {
    console.error("Erro ao tentar executar consulta:", { err });
    res.status(500).json({ error: "Houve um erro ao acessar os produtos" });
  }
};

// Detalhar um produto específico do banco de dados
detalhar = async (req, res) => {
  try {
    const { id } = req.params;
    const produtos = await db.Product.findByPk(id);
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json({ error: "Houve um erro ao detalhar o produto" });
  }
};

// Criar um produto no banco de dados
criar = async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const category_id = req.body.category_id;
  const imgProduct = req.file?.filename;
  try {
    const createProduct = await db.Product.create({
      name,
      description,
      price,
      category_id,
      imgProduct,
    });
    res.status(201).json(createProduct);
  } catch (err) {
    res.status(500).json({ error: `Houve um erro ao criar o produto ${err}` });
  }
};

// Excluir um produto do banco de dados
excluir = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await db.Product.destroy({
      where: { id },
    });
    res.json(deleteProduct);
  } catch (err) {
    res.status(500).json({ error: "Houve um erro ao excluir o produto" });
  }
};

// Alterar todos os campos de um produto
alterar = async (req, res) => {
  const { id } = req.params;
  try {
    const alterProduct = await db.Product.update(req.body, {
      where: { id },
    });
    res.json(alterProduct);
  } catch (err) {
    res.status(500).json({ error: `Houve um erro ao alterar o produto` });
  }
};

module.exports = { listar, detalhar, criar, excluir, alterar };
