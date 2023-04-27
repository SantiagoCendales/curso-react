import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({x: clientX, y: clientY})
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove, false)
    }
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  const handleClick = () => {
    // Recordar que en el 'setState' siempre podemos tener el previous value en el callback
    setEnabled(prevState => {
      return !prevState
    })
  }
  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.3,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}>

      </div>
      <button onClick={handleClick}>{enabled? 'Desactivar' : 'Activar'} Seguir puntero</button>
    </>
  )
}

export default App
