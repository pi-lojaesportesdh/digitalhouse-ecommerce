// TODO: Criar o controller para a criação de usuários e produtos.
const db = require("../database/models");
const { Sequelize } = require("sequelize");

module.exports = {
  async allProducts(req, res) {
    const listProducts = await Product.findAll(); //Lista todos os produtos
    // const id = await Product.findByPk();
    // let resultadoProduto = JSON.stringify(produto)
    return res.render("index", { title: "Lista de produtos", listProducts });
  },

  createProducts: (req, res) => {
    res.render("product/createProduct", {
      title: "Criação de Produtos",
      userEmail: req.cookies.email,
    });
  },

  purchaseEnd: (req, res) => {
    const KEY_STORAGE = "@homepiv2:cart";
    let cart = req.cookies[KEY_STORAGE];
    const toSumItemsPrice = [];
    let totalSumPrice = 0;
    const toSumItemsAmount = [];
    let totalSumAmount = 0;

    if (!cart) {
      cart = "[]";
    }
    cart = JSON.parse(cart);

    // const sumOrder = cart.map((item) => {
    //   const orderItemPrice = Number(item.price);
    //   const orderItemAmount = Number(item.amount);

    //   toSumItemsPrice.push(orderItemPrice);
    //   toSumItemsAmount.push(orderItemAmount);
    // });

    // for (let i = 0; i < toSumItemsPrice.length; i++) {
    //   totalSumPrice += toSumItemsPrice[i];
    // }

    // for (let i = 0; i < toSumItemsAmount.length; i++) {
    //   totalSumAmount += toSumItemsAmount[i];
    // }

    // const totalValue = totalSumPrice * totalSumAmount;

    const cartFormated = cart.map((item) => ({
      ...item,
      subTotal: item.price * item.amount,
      totalItems: item.amount,
    }));
    console.log(cartFormated);

    const total = cartFormated.reduce(
      (acc, current) => acc + Number(current.subTotal),
      0
    );

    const sumItems = cartFormated.reduce(
      (acc, current) => acc + Number(current.amount),
      0
    );

    res.render("purchaseClosing", {
      title: "Finalização da compra",
      userEmail: req.cookies.email,
      cart: cartFormated,
      total,
      sumItems,
    });
  },

  orderSuccess: async (req, res) => {
    console.log(req.body);
    const OrderId = await db.Order.findOne({
      where: {
        user_id: req.cookies.idUser,
      },
      order: [["createdAt", "DESC"]],
    });

    console.log(OrderId.id);

    res.render("orderSuccess", {
      title: "Finalização da compra",
      userEmail: req.cookies.email,
      OrderId: OrderId.id,
    });
  },

  orderTrack: async (req, res) => {
    try {
      const Order = await db.Order.findAll({
        where: {
          user_id: req.cookies.idUser,
        },
      });

      res.render("orderTrack", {
        title: "Finalização da compra",
        userEmail: req.cookies.email,
        Order,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
