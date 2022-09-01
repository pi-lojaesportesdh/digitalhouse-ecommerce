const formUpdateProduct = document.querySelector(".formUpdateProduct");

formUpdateProduct &&
  formUpdateProduct.addEventListener("submit", async (e) => {
    e.preventDefault();

    let nameProduct = document.getElementsByName("nameProduct")[0].value;
    let descProduct = document.getElementsByName("descProduct")[0].value;
    let valueProduct = document.getElementsByName("valueProduct")[0].value;
    let idProduct = document.getElementsByName("idToUrl")[0].value;
    let imgEditProduct = document.querySelector('input[type="file"]');

    let category = document.getElementById("category");
    let categoryValue = category.value;
    const urlUpdate = `/adminUpdate/${idProduct}`;

    const formDataEditProduct = new FormData();

    formDataEditProduct.append("name", nameProduct);
    formDataEditProduct.append("description", descProduct);
    formDataEditProduct.append("price", valueProduct);
    formDataEditProduct.append("category_id", categoryValue);
    formDataEditProduct.append("imgProduct", imgEditProduct.files[0]);

    // const dataForm = {
    //   name: nameProduct,
    //   description: descProduct,
    //   price: valueProduct,
    //   category_id: categoryValue,
    //   imgProduct: imgEditProduct.files[0],
    // };

    const settings = {
      method: "POST",
      body: formDataEditProduct,
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
