import { AddToCartIcon } from "./Icons"
import './Products.css'
export const Products = ({ products }) => {
  return (
    <main className="products">
      <ul>
        {
          products.slice(0, 10).map(product => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={`Product image: ${product.title}`} />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </main>
  )
}