import { useState } from 'react'
import './Filters.css'
export const Filters = () => {
  const [minPrice, setMinPrice] = useState(0)

  const handleOnChange = (event) => {
    setMinPrice(event.target.value)
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
          onChange={handleOnChange}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Categoría</label>
        <select id="category">
          <option value="all">Todos</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}
