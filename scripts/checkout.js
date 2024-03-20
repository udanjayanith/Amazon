cart.forEach(itemsInCart => {
    products.forEach(product => {
        if(product.id == itemsInCart.id) console.log(product)
        
    })
});