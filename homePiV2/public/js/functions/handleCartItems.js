const btnTrash = document.querySelector(".btn-trash");

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

const deleteCookie = (name) => {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

btnTrash.addEventListener("click", (e) => {
  e.preventDefault();
  deleteCookie("@homepiv2:cart");
  window.location.reload();
});
