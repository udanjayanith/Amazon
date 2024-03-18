//products
const productsGrid = document.querySelector('.products-grid')

products.forEach(element => {
    
    let quantity =``
    element.quantity = Math.round(Math.random()*10)
    if (element.quantity <= 0) {
      while (element.quantity > 0){
        let randomNum = Math.round(Math.random()*10)
        element.quantity = randomNum
      }
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

    let matchingItem;
    for(let i =0; i<cart.length; i++){

      if(cart[i].id == productId) {
        matchingItem = 1
        i = cart.length
        
      }else matchingItem = 0

    }

    if(matchingItem != 1) {
    cart.push(
    {
      id: productId
    }
    )
  
    //number of items added to cart
    const cartNum = document.querySelector('.cart-quantity')
    cartNum.innerHTML = cart.length

    //after efacts after clicked add to cart
    document.getElementById(productId).style.opacity = "100%" // chack mark
    document.getElementById(`${productId}button`).innerHTML = "Remove"
  
  }
    else {
    //after efacts after clicked add to cart
    document.getElementById(productId).style.opacity = 0 // chack mark
    document.getElementById(`${productId}button`).innerHTML = "Add to Cart"

    let remove = false
    cart.forEach((cart, index) =>{
      if(cart.id == productId) remove = index
    })

    cart.splice(remove, 1)
    
    const cartNum = document.querySelector('.cart-quantity')
    cartNum.innerHTML = cart.length

  }


  })
})

