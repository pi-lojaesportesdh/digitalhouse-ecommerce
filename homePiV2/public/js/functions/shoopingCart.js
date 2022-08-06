
function addCart({
    id,
    title,
    price,
    description
}) 

{

    let cart = localStorage.getItem("@homepiv2:cart")
    if (!cart) {
        cart = []
    }
    const cartFormated = JSON.parse(cart)
    const productFindedIndex = cartFormated.findIndex(item => item.id === id)


    if (productFindedIndex < 0) {
        cartFormated.push({
            id,
            title,
            price,
            description,
            amount: 1
        })

        localStorage.setItem("@homepiv2:cart", JSON.stringify(cartFormated))
        return;
    }
}




// Ao clicar no mesmo produto 2x ele deve add em uma quantidade

// Ao clicar nos botões + ou -, somar ou subtrair um produto

// Ao clicar na lixeira excluir
