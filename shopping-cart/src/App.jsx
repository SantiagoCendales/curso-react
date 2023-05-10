import { useMemo, useState } from 'react'
import { Products } from './components/Products'
import productsData from './mocks/products.json'
import { AddToCartIcon } from './components/Icons'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'

function App() {

  const { products, setFilters } = useFilters()
  return (
    <>
      <Header handleFilters={setFilters} />
      <Products products={products}/>
    </>
  )
}

export default App
