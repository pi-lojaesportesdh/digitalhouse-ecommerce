const db = require("../database/models");

module.exports = {
  // GET
  login: (req, res) => {
    return res.render("login", {
      title: "Login",
      userEmail: req.cookies.email,
    });
  },

  loginPost: async (req, res) => {
    let { email, password } = req.body;
    const user = await db.Users.findOne({ where: { email } });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Email ou senha não correspondem!" });
    }

    if (user.password !== password) {
      return res
        .status(400)
        .json({ message: "Email ou senha não correspondem!" });
    }

    res.cookie("email", user.email);
    res.redirect("/");
  },

  //GET
  registration: (req, res) => {
    res.render("registration", {
      title: "Cadastro",
      userEmail: req.cookies.email,
    });
  },

  //POST
  // registConfirm : (req,res) => {
  //     const errors = validationResult(req, res);
  //     console.log("Os erros: ",errors);

  //     if (errors.isEmpty()) {
  //         res.render('registConfirm', { title: 'Cadastrado com Sucesso!' });

  //     }else {
  //         res.render('registration', {
  //             errors: errors.mapped(),
  //             title : 'OPS!'});
  //     }
  // },
};
