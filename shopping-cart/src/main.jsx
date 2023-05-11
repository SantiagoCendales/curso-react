import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './components/context/filtersContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </React.StrictMode>,
)
