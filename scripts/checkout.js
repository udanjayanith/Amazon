const orderSummary = document.querySelector('.order-summary')

const typeOfItems = document.querySelector('.return-to-home-link')
const items = document.querySelector('.items')
const paymentSummaryMoney = document.querySelector('.payment-summary-money')
let num = 0
const shippingAndHandling = document.querySelector('.Shipping-and-handling')
const beforeTax = document.querySelector('.before-tax') 
const estimatedTax = document.querySelector('.estimated-tax')
let tax = 0
const orderTotal = document.querySelector('.order-total')

//checkoutCenter
checkoutCenter()
function checkoutCenter(){
  cart.forEach(itemsInCart => {
    products.forEach(product => {

        if(product.id == itemsInCart.id) {
            itemsInCartRender(product, itemsInCart)
            orderSummaryRender(true, itemsInCart ,product)
        }
        
    })
});
}

function orderSummaryRender(parametter, itemsInCart, product){
  if(parametter == true){
    //Order Summary
    typeOfItems.innerHTML = cart.length
    items.innerHTML = `Items (${typeOfItems.innerHTML}):`
    
    num +=((product.prize*itemsInCart.quantity)/100)
    paymentSummaryMoney.innerHTML = num.toFixed(2)
  
    if(num.toFixed(2) > 100) tax = 6
    else tax = 4
    shippingAndHandling.innerHTML = (num*(tax/100)).toFixed(2)
    beforeTax.innerHTML = (num *(tax*2/100)).toFixed(2)
  
    estimatedTax.innerHTML = (num*(10/100)).toFixed(2)
  
    orderTotal.innerHTML = (num+(num*(tax/100))+(num *(tax*2/100))+(num*(10/100))).toFixed(2)

  } else if(parametter == false){

    orderSummary.innerHTML = ''
    checkoutCenter()
  }

}

//function for rendering items in cart that diractly connected to checkoutCenter
function itemsInCartRender(product, itemsInCart){
    orderSummary.innerHTML += 
    `
    <div class="cart-item-container" data-product-id = "${itemsInCart.id}">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src=${product.image}>

      <div class="cart-item-details">
        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-price">
          $${((product.prize*itemsInCart.quantity)/100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${itemsInCart.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <button class="delete-quantity-link link-primary update-quantity-link" onclick ="deleteCartItem('${itemsInCart.id}')">
            Delete
          </button>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
        Description:
        </div>

        <p class="limit">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima corrupti nobis vel similique soluta cupiditate placeatsectetur adipisicing elit.</p>

        </div>
      </div>

    </div>
  </div>
    
    `

}

//the function run when someone click on the delete button on item div
//this'll remove item from cart and rerender the checkout center
function deleteCartItem(productID){
  cart.forEach((cartItem, index) =>{  
    products.forEach(product => {

      if(cartItem.id == productID && cartItem.id == product.id) {
        cart.splice(index, 1)
        orderSummaryRender(false, cartItem, product)
      }

    })
  })
}

