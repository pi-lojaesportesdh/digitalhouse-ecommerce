// Pg carrinho


let pageCart = localStorage.getItem("@homepiv2:cart")
let pageCartFormated = JSON.parse(pageCart)
let testeCarrinho = pageCartFormated.filter((products)=>{
    return products
})

console.log(pageCartFormated)
console.log(testeCarrinho)




