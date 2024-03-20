cartLength()

//products added to the page
const productsGrid = document.querySelector('.products-grid')

products.forEach(element => {
    
    let quantity;
    element.quantity = Math.round(Math.random()*10)

    while (element.quantity <= 0){ 
      element.quantity = Math.round(Math.random()*10)
    }

    for (let i = 0; i<element.quantity; i++){
        quantity += `
        <option value="${i+1}">${i+1}</option>
        `
    }

    renderProducts(productsGrid, element, quantity)

    cart.forEach(cartItem =>{
      if(cartItem.id == element.id) afterClikingButton(element.id)
    })

});


//adding items to cart

document.querySelectorAll('.button-primary').forEach(button =>{
  button.addEventListener('click', () =>{

    const productId = button.dataset.productId

    // adding same item twice stopper
    let matchingItem;
    for(let i =0; i<cart.length; i++){

      if(cart[i].id == productId) {
        matchingItem = 1
        i = cart.length
        
      }else matchingItem = 0

    }

    // if item isn't in the cart adding item to cart
    const quantity = document.getElementById(`${productId}quantity`)
    if(matchingItem != 1) {
      
    cart.push(
    {
      id: productId,
      quantity: quantity.value
    }
    )
    
    afterClikingButton(productId)
  
  }
  else afterClikingButton(productId)

  })
})


function afterClikingButton(productId){

  const checkmark = document.getElementById(productId)
  const yellowButton = document.getElementById(`${productId}button`)

  if(checkmark.style.opacity == 0){

    checkmark.style.opacity = "100%"
    yellowButton.innerHTML = "Remove"

  }else {

    checkmark.style.opacity = 0
    yellowButton.innerHTML = "Add to Cart"

    //removing items from cart
    cart.forEach((cartItem, index) =>{
      if(cartItem.id == productId) cart.splice(index, 1)
    })
    

  }

  cartLength()
  localStorage.setItem('products', JSON.stringify(cart))

}