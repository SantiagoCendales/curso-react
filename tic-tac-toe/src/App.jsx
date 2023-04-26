import { useState } from 'react'
import './App.css'

const TURNS = {
  x: 'x',
  o: 'o'
}

// eslint-disable-next-line no-unused-vars
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [3, 4, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const Square = ({ children, updateBoard, index, isSelected }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}

function App() {
  const initialBoardState = Array(9).fill(null)
  const [board, setBoard] = useState(initialBoardState);
  const [turn, setTurn] = useState(TURNS.x)
  // null no hay ganador, false empate y true ganador
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    // Se verifica que la casilla ya este llena
    // o si ya hay un ganador
    if(board[index] || winner) return
    // Se actualiza el estado del board
    const newBoard = [...board];
    newBoard[index] = turn
    setBoard(newBoard);
    // Se cambia el turno
    const nextTurn = turn === TURNS.o ? TURNS.x : TURNS.o
    setTurn(nextTurn)
    // Revisión de si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    }
  }

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
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
