import { useState } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export const Filters = () => {
  const { filters, setFilters } = useFilters()

  const handleOnChangeRange = (event) => {
    const newValue = event.target.value 
    setFilters(value => ({
      ...value,
      minPrice: newValue
    }))
  }

  const handleChangeCategory = (event) => {
    const newValue = event.target.value
    setFilters(value => ({
      ...value,
      category: newValue
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio mínimo</label>
        <input
          id="price"
          type="range"
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleOnChangeRange}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select onChange={handleChangeCategory} id="category" value={filters.category}>
          <option value="all">Todos</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
