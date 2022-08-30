const formExclude = document.querySelector(".formExclude");

formExclude &&
  formExclude.addEventListener("submit", async (e) => {
    e.preventDefault();

    let idExclude = document.getElementsByName("idToUrl")[0].value;
    const urlExclude = `/adminUpdate/${idExclude}`;

    const settings = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    };

    Swal.fire({
      title: "Produto deletado com sucesso!",
      icon: "success",
      confirmButtonText:
        '<a href="/allProducts" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Ok</a>',
    });

    try {
      let response = await fetch(urlExclude, settings);
      if (response.ok) {
      }
    } catch (err) {
      console.log(err);
    }
  });
