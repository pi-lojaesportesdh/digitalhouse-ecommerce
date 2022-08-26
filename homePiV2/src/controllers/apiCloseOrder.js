const db = require("../database/models");

createOrder = async (req, res) => {
  // TODO: buscar id do usuário através do req.body
  // mapear o req.body e buscar somente o id do usuário
  const data = req.body.itemsFilter;
  const user_id = req.body.user_id;
  const toSumItemsPrice = [];
  let totalSumPrice = 0;
  const toSumItemsQuantity = [];
  let totalSumQuantity = 0;

  const dataFilter = data.map((orderItem) => {
    const orderItemPrice = Number(orderItem.price);
    const orderItemQuantity = Number(orderItem.quantity);

    toSumItemsPrice.push(orderItemPrice);
    toSumItemsQuantity.push(orderItemQuantity);
  });

  for (let i = 0; i < toSumItemsPrice.length; i++) {
    totalSumPrice += toSumItemsPrice[i];
  }

  for (let i = 0; i < toSumItemsQuantity.length; i++) {
    totalSumQuantity += toSumItemsQuantity[i];
  }

  const totalOrderValue = totalSumPrice * totalSumQuantity;

  const dataToOrder = {
    user_id,
    total: totalOrderValue,
  };

  const createOrder = await db.Order.create(dataToOrder);
  const order_id = createOrder.dataValues.id;

  console.log(data);

  if (createOrder) {
    const createOrderItem = await db.OrderItem.bulkCreate(req.body.itemsFilter);
  }
};

module.exports = { createOrder };
