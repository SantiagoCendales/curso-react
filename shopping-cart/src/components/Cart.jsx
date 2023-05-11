import './Cart.css'
import { useId } from "react"
import { ClearCartIcon, CartIcon } from "./Icons"
import { useCart } from '../hooks/useCart'

const Cart = () => {
  const cartCheckboxId = useId()
  const {cart, addCart, clearCart} = useCart()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
        <ul>
          {
            cart.map(cartItem => (
              <li key={cartItem.id}>
                <img src={cartItem.thumbnail} alt={cartItem.description} />
                <div>
                  <strong>{cartItem.title}</strong> - {cartItem.price}
                </div>

                <footer>
                  <small>Qty: {cartItem.quantity}</small>
                  <button onClick={() => addCart(cartItem)}>
                    +
                  </button>
                </footer>
              </li>
            ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart