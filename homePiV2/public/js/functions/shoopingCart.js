

// Ao clicar no mesmo produto 2x ele deve add em uma quantidade

// Pg carrinho
// Ao clicar nos botões + ou -, somar ou subtrair um produto
// Ao clicar na lixeira excluir
function addCart ({
    id,
    title,
    value,
    description
})
{
    let cart = localStorage.getItem("@homepiv2:cart")
   if (!cart){
    cart = "[]"
   }
   const cartFormated = JSON.parse(cart)
   const productFindedIdex =  cartFormated.findIndex( item => item.id === id)

   if (productFindedIdex < 0){
    cartFormated.push({
        id,
        title,
        value,
        description,
        amount: 1
    })

    localStorage.setItem("@homepiv2:cart", JSON.stringify(cartFormated))
    return; 
   }
}
