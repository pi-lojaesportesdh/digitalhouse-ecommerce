let url = "/api";
let form = document.querySelector(".formCreateProduct");

const getProducts = async () => {
  // 1. Listar os produtos que vem da API
  try {
    let response = await fetch(url); // Buscando a URL da API.
    if (response.ok) {
      let json = await response.json(); // Buscando os dados da api no formato JSON
    }
  } catch (err) {}
};

// 2. Criar item dentro da APi
//POST
const addProduct = async () => {
  form &&
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let nameProduct = document.getElementsByName("nameProduct")[0].value;
      let descProduct = document.getElementsByName("descProduct")[0].value;
      let valueProduct = document.getElementsByName("valueProduct")[0].value;
      let imgProduct = document.getElementsByName("imgProduct")[0].value;

      const dataForm = {
        name: nameProduct,
        description: descProduct,
        price: valueProduct,
        imgProduct: imgProduct,
      };

      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(dataForm),
      };

      try {
        let response = await fetch(url, settings);
        if (response.ok) {
          Swal.fire("Produto criado com sucesso!");
        }
      } catch (err) {
        console.log("O produto não foi criado no banco de dados");
      }
    });
};

const detailProduct = async () => {
  try {
    let response = await fetch(url);
    if (response.ok) {
    }
  } catch (err) {
    console.log("Falha ao tentar detalhar o produto!");
  }
};

addProduct();
getProducts();
// 1. Quando a view estiver pronta reconfigurar essa linha para receber do body e descomentar
