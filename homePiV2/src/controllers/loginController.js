const db = require("../database/models");
const brcrypt = require("bcrypt");

module.exports = {
  // GET
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
    });
  },

  loginPost: async (req, res) => {
    let { email, password } = req.body;
    const user = await db.Users.findOne({ where: { email } });

    const comparePass = brcrypt.compareSync(password, user.password);

    if (!user) {
      return res
        .status(400)
        .json({ message: "Email ou senha não correspondem!" });
    }

    if (!comparePass) {
      return res
        .status(400)
        .json({ message: "Email ou senha não correspondem!" });
    }

    res.cookie("email", user.email);
    res.cookie("idUser", user.id);
    res.redirect("/");
  },

  //GET
  registration: (req, res) => {
    res.render("registration", {
      title: "Cadastro",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
    });
  },

  profile: async (req, res) => {
    const idUser = req.cookies.idUser;
    const findUser = await db.Users.findOne({ where: { id: idUser } });

    const { name, email, adresse } = findUser.dataValues;

    console.log(name, email, adresse);

    res.render("user/profile", {
      title: "Perfil do usuário",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
      name,
      email,
      adresse,
    });
  },

  changePassword: async (req, res) => {
    res.render("user/changePassword", {
      title: "Mudar senha",
      userEmail: req.cookies.email,
      emailAdmin: req.cookies.emailAdmin,
    });
  },

  changePasswordPost: async (req, res) => {
    const idUser = req.cookies.idUser;
    const { password } = req.body;

    console.log(password);

    const updateUserPass = await db.Users.update(
      { password },
      { where: { id: idUser } }
    );

    if (password) {
      res.clearCookie("idUser");
      res.clearCookie("email");
    }
  },
};
