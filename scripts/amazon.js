if(JSON.parse(localStorage.getItem('products')) == null) console.log('null')
//else cart = JSON.parse(localStorage.getItem('products'))

const cartNum = document.querySelector('.cart-quantity')
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

    productsGrid.innerHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${element.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${element.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${element.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${element.rating.count}
            </div>
          </div>

          <div class="product-price">
          $${(element.prize / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class="quantity">
                ${quantity}
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart" id = "${element.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-id = "${element.id}" id = "${element.id}button">
            Add to Cart
          </button>
        </div>
    `

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
    if(matchingItem != 1) {
    cart.push(
    {
      id: productId
    }
    )
    
    afterClikingButton(productId)
  
  }
    else {

    afterClikingButton(productId)

  }

  })
})



function cartLength(){
  if (cart.length == 0) cartNum.innerHTML = ''
  else cartNum.innerHTML = cart.length
}

//

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
    let remove
    cart.forEach((cart, index) =>{
      if(cart.id == productId) remove = index
    })
    cart.splice(remove, 1)

  }

  cartLength()
  localStorage.setItem('products', JSON.stringify(cart))

}