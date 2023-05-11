import PropTypes from 'prop-types'
import { useCart } from '../hooks/useCart'
const CartItem = ({cartItem}) => {
  const { addCart } = useCart()
  return (
    <li>
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
  )
}

export default CartItem

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number
  })
}