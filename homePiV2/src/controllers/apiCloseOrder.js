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
  console.log(data);

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

  const tempData = [];
  const createOrder = await db.Order.create(dataToOrder);
  const order_id = createOrder.dataValues.id;

  for (let obj of data) {
    tempData.push({
      price: obj.price,
      quantity: obj.quantity,
      order_id,
      product_id: obj.product_id,
    });
  }

  if (createOrder) {
    const createOrderItem = await db.OrderItem.bulkCreate(tempData);
  }
};

Order = async (req, res) => {
  /* 
  1. Aqui eu deverei fazer com que mostre os pedidos dos usuários.
  Porém eu vou mostrar somente o pedido do usuário com o id específico
  
  */
  try {
    const searchOrder = await db.Order.findAll({
      where: {
        user_id: req.cookies.idUser,
      },
    });
    res.send(searchOrder);
  } catch (err) {
    res.status(500).json({ error: "Houve um erro ao detalhar o pedido!" });
  }
};

module.exports = { createOrder, Order };
