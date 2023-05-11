import { useContext, useMemo, useState } from 'react'
import productsData from '../mocks/products.json'
import { FilterContext } from '../context/filtersContext'

export const useFilters = () => {

  const [products] = useState(productsData.products)

  const {filters, setFilters} = useContext(FilterContext)

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
