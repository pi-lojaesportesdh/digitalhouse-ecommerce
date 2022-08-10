
module.exports = {
    cartPage : (req, res, next) => {
        const KEY_STORAGE = "@homepiv2:cart";
        let cart = req.cookies[KEY_STORAGE];
        if (!cart){
            cart= '[]';
        }
        cart = JSON.parse(cart);
        const cartFormated = cart.map(item =>({
            ...item,
            subTotal:item.price * item.amount
        }))
        const total = cartFormated.reduce((acc, current) =>acc+Number(current.subTotal), 0);
        res.render('shoppingCart', { 
            title: 'Seu carrinho',
            cart:cartFormated,
            total
        });
    }
};


