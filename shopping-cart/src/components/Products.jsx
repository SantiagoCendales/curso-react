import { useCart } from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import './Products.css'
import PropTypes from 'prop-types'
export const Products = ({ products }) => {
  const {cart, addCart, removeFromCart } = useCart()

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  return (
    <main className="products">
      <ul>
        {
          products.slice(0, 10).map(product => {
            const checkProduct = checkProductInCart(product)
            return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={`Product image: ${product.title}`} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                  {
                    checkProduct
                    && <button onClick={() => removeFromCart(product)}><RemoveFromCartIcon /></button>
                  }
                <button onClick={() => addCart(product)}>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          )})
        }
      </ul>
    </main>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}