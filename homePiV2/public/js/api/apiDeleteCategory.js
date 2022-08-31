const formDeleteCategory = document.querySelector(".formDeleteCategory");

formDeleteCategory &&
  formDeleteCategory.addEventListener("submit", async (e) => {
    e.preventDefault();

    let idExcludeCategory = document.getElementsByName("idCategory")[0].value;
    const urlExcludeCategory = `/editCategory/${idExcludeCategory}`;

    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    Swal.fire({
      title: "Categoria deletada com sucesso!",
      icon: "success",
      confirmButtonText:
        '<a href="/allCategories" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Ok</a>',
    });

    try {
      let response = await fetch(urlExcludeCategory, settings);
      if (response.ok) {
      }
    } catch (err) {
      console.log(err);
    }
  });
