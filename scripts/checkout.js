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

cart.forEach(itemsInCart => {
    products.forEach(product => {
        if(product.id == itemsInCart.id) {
            itemsInCartRender(product, itemsInCart)
            
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
        }
        
    })
});


function itemsInCartRender(product, itemsInCart){
    orderSummary.innerHTML += 
    `
    <div class="cart-item-container">
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
          <span class="delete-quantity-link link-primary">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-option-1">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
    `
}