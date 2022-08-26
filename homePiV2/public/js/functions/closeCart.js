const KEY_STORAGE = "@homepiv2:cart";
let urlPurchaseClosing = "purchaseClosing";
let formPurchaseClosing = document.querySelector(".formPurchaseClosing");

function getCookie(name) {
  var cookies = document.cookie;
  var prefix = name + "=";
  var begin = cookies.indexOf("; " + prefix);

  if (begin == -1) {
    begin = cookies.indexOf(prefix);

    if (begin != 0) {
      return null;
    }
  } else {
    begin += 2;
  }

  var end = cookies.indexOf(";", begin);

  if (end == -1) {
    end = cookies.length;
  }

  return cookies.substring(begin + prefix.length, end);
}
function getCart() {
  let cart = getCookie(KEY_STORAGE);
  if (!cart) {
    cart = "[]";
  }

  cart = JSON.parse(cart);

  return cart;
}

formPurchaseClosing &&
  formPurchaseClosing.addEventListener("submit", async (e) => {
    e.preventDefault();

    const itemsCart = getCart();
    const itemsFilter = itemsCart.map((item) => {
      const price = item.price;
      const amount = item.amount;

      const dataFormated = {
        price,
        amount,
      };

      return dataFormated;
    });

    // GAMBIARRA QUE FUNCIONA!
    const tempData = [];
    const orderNumber = Math.floor(Math.random() * 1000);
    for (let item of itemsFilter) {
      const price = item.price;
      const amount = item.amount;
      tempData.push({ price, amount, orderNumber });
    }

    /*
      Objetivo: Quando o usuário clicar em finalizar a compra o ID do usuário tem que estar assossiado a compra!
      Depois que o usuário clicar em finalizar a compra, deverá sumir o coookie @home.. 
      Verificar se existe o email dentro do cookie
    */

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(tempData),
    };

    try {
      let response = fetch(urlPurchaseClosing, settings);
      if (response.ok) {
        console.log(response.json());
        console.log("Venda criada");
      }
    } catch (err) {
      console.log(err);
    }
  });
