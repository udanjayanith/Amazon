let cart = []

if(JSON.parse(localStorage.getItem('products')) == null) console.log('null')
else cart = JSON.parse(localStorage.getItem('products'))

function cartLength(){
    const cartNum = document.querySelector('.cart-quantity')
    let numOfItems = 0

    if (cart.length == 0) cartNum.innerHTML = ''
    
    cart.forEach(cartItem =>{
      const quantity = Number(cartItem.quantity)
      numOfItems+=quantity
      cartNum.innerHTML = numOfItems
    })

  }