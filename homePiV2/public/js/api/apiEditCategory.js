const formEditCategory = document.querySelector(".formEditCategory");

formEditCategory &&
  formEditCategory.addEventListener("submit", async (e) => {
    e.preventDefault();

    let nameCategory = document.getElementsByName("nameCategory")[0].value;
    let idCategory = document.getElementsByName("idCategory")[0].value;
    const urlCategoryUpdate = `/editCategory/${idCategory}`;

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
      title: "Categoria alterada com sucesso!",
      icon: "success",
      confirmButtonText:
        '<a href="/allCategories" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Ok</a>',
    });
    try {
      let response = await fetch(urlCategoryUpdate, settings);
      if (response.ok) {
      }
    } catch (err) {
      console.log("O produto não foi criado no banco de dados");
    }
  });
