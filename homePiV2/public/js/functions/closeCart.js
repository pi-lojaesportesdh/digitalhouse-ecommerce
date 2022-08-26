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
      let response = fetch(urlPurchaseClosing, settings);
      if (response.ok) {
        console.log(response.json());
      }
    } catch (err) {
      console.log(err);
    }
  });
