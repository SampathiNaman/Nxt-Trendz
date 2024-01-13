import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(product => {
        const {quantity, price} = product
        totalPrice += quantity * price
      })
      return (
        <>
          <div className="cart-summary-info-container">
            <h1 className="cart-summary-order-total">
              Order Total:{' '}
              <span className="total-price">Rs {totalPrice}/-</span>
            </h1>
            <p className="cart-summary-item-count">
              {cartList.length} Items in cart
            </p>
          </div>

          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
