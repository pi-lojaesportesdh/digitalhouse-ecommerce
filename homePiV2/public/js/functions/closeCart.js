const KEY_STORAGE = "@homepiv2:cart";
const KEY_IDUser = "idUser";
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

function getIdUser() {
  let IDUser = getCookie(KEY_IDUser);
  if (!IDUser) {
    IDUser = "[]";
  }

  IDUser = JSON.parse(IDUser);

  return IDUser;
}

const deleteCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

formPurchaseClosing &&
  formPurchaseClosing.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user_id = getIdUser();
    const itemsCart = getCart();
    const itemsFilter = itemsCart.map((item) => {
      const price = item.price;
      const amount = item.amount;
      const product_id = item.id;

      const dataFormated = {
        product_id,
        price,
        quantity: amount,
      };

      return dataFormated;
    });

    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ user_id, itemsFilter }),
    };

    try {
      Swal.fire({
        title: "Compra finalizada com sucesso!",
        icon: "success",
        confirmButtonText:
          '<a href="/product/orderTrack" class="text-decoration-none text-light"><i class="fa fa-thumbs-up"></i> Acompanhar pedido</a>',
      });
      let response = fetch(urlPurchaseClosing, settings);
      deleteCookie("@homepiv2:cart");

      //window.location.href = "http://localhost:3000/product/orderSuccess";
    } catch (err) {
      console.log(err);
    }
  });
