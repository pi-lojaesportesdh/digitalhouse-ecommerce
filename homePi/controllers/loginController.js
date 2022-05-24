const loginController = {
  areaLogin: (req, res) => {
    res.render("login");
  },
  acaoEnviar: (req, res) => {
    res.render("acaoEnviar");
  },
};

module.exports = loginController;
