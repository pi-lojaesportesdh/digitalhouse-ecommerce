const db = require("../database/models");

createOrder = async (req, res) => {
  // TODO: buscar id do usuário através do req.body
  // mapear o req.body e buscar somente o id do usuário
  const data = req.body.itemsFilter;
  const user_id = req.body.user_id;

  //date
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();

  //time
  let hr = today.getHours();
  let min = today.getMinutes();
  let seconds = today.getSeconds();

  const dataFormated = data.map((item) => ({
    ...item,
    subTotal: item.price * item.quantity,
  }));
  const total = dataFormated.reduce(
    (acc, current) => acc + Number(current.subTotal),
    0
  );

  const dataToOrder = {
    user_id,
    total,
    date: `${dd}/${mm}/${yyyy}`,
    time: `${hr}:${min}:${seconds}`,
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

module.exports = { createOrder };
