export let cart = []


export function cartLength(){
    const cartNum = document.querySelector('.cart-quantity')

    if (cart.length == 0) cartNum.innerHTML = ''
    else cartNum.innerHTML = cart.length
  }