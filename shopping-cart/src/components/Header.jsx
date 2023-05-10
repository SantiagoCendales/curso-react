import { Filters } from "./Filters"

export const Header = ({ handleFilters }) => {
  return (
    <header>
      <h1>React Shop</h1>
      <Filters changeFilters={handleFilters} />
    </header>
  )
}
