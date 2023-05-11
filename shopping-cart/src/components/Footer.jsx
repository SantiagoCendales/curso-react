import { useCart } from '../hooks/useCart'
import './Footer.css'

export function Footer () {
  const {cart} = useCart()
  // console.log(cart)
  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <p>{cart.length}</p>
    </footer>
  )
}