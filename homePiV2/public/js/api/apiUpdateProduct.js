const formUpdateProduct = document.querySelector(".formUpdateProduct");

formUpdateProduct &&
  formUpdateProduct.addEventListener("submit", async (e) => {
    e.preventDefault();

    let nameProduct = document.getElementsByName("nameProduct")[0].value;
    let descProduct = document.getElementsByName("descProduct")[0].value;
    let valueProduct = document.getElementsByName("valueProduct")[0].value;
    let idProduct = document.getElementsByName("idToUrl")[0].value;
    const urlUpdate = `/adminUpdate/${idProduct}`;

    const dataForm = {
      name: nameProduct,
      description: descProduct,
      price: valueProduct,
    };

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(dataForm),
    };

    Swal.fire({
      title: "Produto alterado com sucesso!",
      icon: "success",
      confirmButtonText:
        '<a href="/allProducts" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Ok</a>',
    });
    try {
      let response = await fetch(urlUpdate, settings);
      if (response.ok) {
      }
    } catch (err) {
      console.log("O produto não foi criado no banco de dados");
    }
  });
