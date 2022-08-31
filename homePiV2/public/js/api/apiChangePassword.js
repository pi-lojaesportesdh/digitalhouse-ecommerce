let urlChangePassword = "/changePassword";

let formChangePassword = document.querySelector(".formChangePassword");

formChangePassword &&
  formChangePassword.addEventListener("submit", async (e) => {
    e.preventDefault();

    let newPass = document.getElementsByName("newPass")[0].value;
    let confirmNewPass = document.getElementsByName("confirmNewPass")[0].value;

    const deleteCookie = (name) => {
      document.cookie =
        name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    };

    console.log(confirmNewPass);

    if (newPass !== confirmNewPass) {
      return Swal.fire("As senhas não são iguais!");
    }

    const dataForm = {
      password: newPass,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataForm),
    };

    Swal.fire({
      title: "Senha alterada com sucesso!",
      confirmButtonText:
        '<a href="/login" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Ok</a>',
    });

    deleteCookie("email");
    try {
      let response = await fetch(urlChangePassword, settings);
      if (response.ok) {
        deleteCookie("idUser");
      }
    } catch (err) {
      console.log("A categoria não foi criado no banco de dados");
    }
  });
