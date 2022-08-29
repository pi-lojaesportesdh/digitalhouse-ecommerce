module.exports = {
  adminLog: (req, res) => {
    res.render("admin", { title: "Olá admin", userEmail: req.cookies.email });
  },
  adminProducts: (req, res) => {
    res.render("product/adminProduct", {
      title: "Olá Admin, você está logado!",
      userEmail: req.cookies.email,
    });
  },
};
