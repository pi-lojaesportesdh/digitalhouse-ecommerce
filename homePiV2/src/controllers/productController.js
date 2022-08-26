// TODO: Criar o controller para a criação de usuários e produtos.

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
    }));
    const total = cartFormated.reduce(
      (acc, current) => acc + Number(current.subTotal),
      0
    );

    console.log(cartFormated);

    res.render("purchaseClosing", {
      title: "Finalização da compra",
      userEmail: req.cookies.email,
      cart: cartFormated,
      total,
    });
  },
};
