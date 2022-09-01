const db = require("../database/models");

module.exports = {
  cartPage: async (req, res, next) => {
    const KEY_STORAGE = "@homepiv2:cart";
    let cart = req.cookies[KEY_STORAGE];
    if (!cart) {
      cart = "[]";
    }
    cart = JSON.parse(cart);
    const cartFormated = cart.map((item) => ({
      ...item,
      subTotal: item.price * item.amount,
    }));
    const total = cartFormated.reduce(
      (acc, current) => acc + Number(current.subTotal),
      0
    );
    const produtos = await db.Product.findAll();

    res.render("shoppingCart", {
      title: "Seu carrinho",
      cart: cartFormated,
      produtos,
      total,
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
    });
  },
};
