const url = "/users/api";
const formUser = document.querySelector(".formUser");

const addUser = async () => {
  formUser &&
    formUser.addEventListener("submit", async (e) => {
      let name = document.getElementsByName("nomeCompleto")[0].value;
      let password = document.getElementsByName("password")[0].value;
      let email = document.getElementsByName("email")[0].value;
      let adresse = document.getElementsByName("inputAdress")[0].value;

      e.preventDefault();

      const dataForm = {
        name,
        password,
        email,
        adresse,
      };

      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(dataForm),
      };

      Swal.fire({
        title: "Registrado com sucesso",
        icon: "success",
        confirmButtonText:
          '<a href="/login" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Fazer Login</a>',
      });
      try {
        let response = await fetch(url, settings);
        if (response.ok) {
        }
      } catch (err) {
        console.log("O usuário não foi criado no banco de dados");
      }
    });
};

addUser();
