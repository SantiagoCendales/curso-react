import { useMemo, useState } from 'react'
import { Products } from './components/Products'
import productsData from './mocks/products.json'
import { AddToCartIcon } from './components/Icons'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'
import { Footer } from './components/Footer'

function App() {

  const { products } = useFilters()
  return (
    <>
      <Header />
      <Products products={products}/>
      <Footer />
    </>
  )
}

export default App
