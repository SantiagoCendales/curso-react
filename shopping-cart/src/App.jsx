import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'
import Cart from './components/Cart'
import { CartProvider } from './context/cart'

function App() {

  const { products } = useFilters()
  return (
    <CartProvider>
      <Header />
      <Products products={products}/>
      <Footer />
      <Cart />
    </CartProvider>
  )
}

export default App
