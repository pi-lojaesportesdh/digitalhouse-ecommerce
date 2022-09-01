// TODO: Criar o controller para a criação de usuários e produtos.
const db = require("../database/models");
const { Sequelize } = require("sequelize");

module.exports = {
  async allProducts(req, res) {
    const listProducts = await Product.findAll(); //Lista todos os produtos
    return res.render("index", { title: "Lista de produtos", listProducts });
  },

  productsByCategory: (req, res) => {
    res.render("categoryProduct", {
      title: "Produtos por categoria",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
    });
  },

  createProducts: async (req, res) => {
    const categories = await db.Category.findAll();

    res.render("admin/createProduct", {
      title: "Criação de Produtos",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
      categories,
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

    const cartFormated = cart.map((item) => ({
      ...item,
      subTotal: item.price * item.amount,
      totalItems: item.amount,
    }));

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
      emailAdmin: req.cookies.emailAdmin,
      cart: cartFormated,
      total,
      sumItems,
    });
  },

  orderSuccess: async (req, res) => {
    const OrderId = await db.Order.findOne({
      where: {
        user_id: req.cookies.idUser,
      },
      order: [["createdAt", "DESC"]],
    });

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

      for (let order of Order) {
        const OrderItem = await db.OrderItem.findAll({
          where: {
            order_id: order.id,
          },
        });
        for (let orderItem of OrderItem) {
          const product = await db.Product.findOne({
            where: { id: orderItem.product_id },
          });

          orderItem.product = product;
        }
        order.items = OrderItem;
      }

      console.log(Order[0].items[0]?.product);

      res.render("orderTrack", {
        title: "Finalização da compra",
        userEmail: req.cookies.email,
        Order,
        emailAdmin: req.cookies.emailAdmin,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
