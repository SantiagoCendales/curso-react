import { useMemo, useState } from 'react'
import productsData from '../mocks/products.json'

export const useFilters = () => {

  const [products, setProducts] = useState(productsData.products)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
    })
  }

  const filteredProducts = useMemo(() => {
    return filterProducts(products)
  }, [filters])

  return {
    products: filteredProducts,
    filters,
    setFilters
  }
}
