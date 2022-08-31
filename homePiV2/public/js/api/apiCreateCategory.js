let urlCategory = "/category";
let formCreateCategory = document.querySelector(".formCreateCategory");

formCreateCategory &&
  formCreateCategory.addEventListener("submit", async (e) => {
    e.preventDefault();

    let nameCategory = document.getElementsByName("nameCategory")[0].value;

    const dataForm = {
      name: nameCategory,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataForm),
    };

    Swal.fire({
      title: "Categoria criada com sucesso!",
      confirmButtonText:
        '<a href="/allCategories" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Ok</a>',
    });
    try {
      let response = await fetch(urlCategory, settings);
      if (response.ok) {
        Swal.fire("Categoria criada com sucesso!");
      }
    } catch (err) {
      console.log("A categoria não foi criado no banco de dados");
    }
  });
