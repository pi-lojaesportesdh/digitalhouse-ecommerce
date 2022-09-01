const formAdminlogin = document.querySelector(".formAdminLogin");
let urlAdmin = "/admin";

formAdminlogin &&
  formAdminlogin.addEventListener("submit", async (e) => {
    e.preventDefault();

    let password = document.getElementsByName("adminPass")[0].value;
    let adminEmail = document.getElementsByName("adminEmail")[0].value;

    const dataForm = {
      password,
      adminEmail,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataForm),
    };

    try {
      let response = await fetch(urlAdmin, settings);
      if (response.ok) {
        window.location.href = "/";
      }
    } catch (err) {
      console.log("O usuário não foi criado no banco de dados");
    }
  });
