const db = require("../database/models");

createSale = async (req, res) => {
  try {
    console.log(req.body);
    const createSale = await db.Sales.bulkCreate(req.body);
    res.status(201).json(createSale);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createSale };
