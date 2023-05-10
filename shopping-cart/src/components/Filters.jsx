import { useState } from 'react'
import './Filters.css'
export const Filters = ({ changeFilters }) => {
  const [minPrice, setMinPrice] = useState(0)

  const handleOnChangeRange = (event) => {
    const newValue = event.target.value 
    setMinPrice( newValue )
    changeFilters(value => ({
      ...value,
      minPrice: newValue
    }))
  }

  const handleChangeCategory = (event) => {
    const newValue = event.target.value
    changeFilters(value => ({
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
          onChange={handleOnChangeRange}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select onChange={handleChangeCategory} id="category">
          <option value="all">Todos</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
