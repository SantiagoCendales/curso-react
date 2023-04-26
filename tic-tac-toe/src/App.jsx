import { useState } from 'react'
import './App.css'

const TURNS = {
  x: 'x',
  o: 'o'
}

const Square = ({ children, updateBoard, index, isSelected, handleTurn }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  return (
    <div className={className} onClick={() => handleTurn()}>
      {children}
    </div>
  )
}

function App() {
  const initialBoardState = Array(9).fill(null)
  const [board, setBoard] = useState(initialBoardState);
  const [turn, setTurn] = useState(TURNS.x)

  const handleTurn = () => {
    const nextTurn = turn === TURNS.o ? TURNS.x : TURNS.o
    setTurn(nextTurn)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} handleTurn={handleTurn}>
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
      </section>
    </main>
  )
}

export default App
