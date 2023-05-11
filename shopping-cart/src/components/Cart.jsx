import './Cart.css'
import { useId } from "react"
import { ClearCartIcon, CartIcon } from "./Icons"
import { useCart } from '../hooks/useCart'
import CartItem from './CartItem'

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
              <CartItem key={cartItem.id} cartItem={cartItem}/>
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