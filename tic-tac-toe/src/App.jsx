import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { TURNS } from './constants';
import { Square } from './components/Square';
import { checkWinner } from './logic/board';
import { Winner } from './components/Winner';
import { saveToStorage } from './logic/saveGame';


function App() {
  const initialBoardState = Array(9).fill(null)
  const [board, setBoard] = useState(() => {
    const boardFromStorage = localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : initialBoardState
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.o // El ?? mira si es null o undefine
    // return turnFromStorage || TURNS.o El || mira si es falsy
  })
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

    // Guardar partida
    saveToStorage({
      board: newBoard,
      turn: nextTurn
    })

    // Revisión de si hay ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(() => {
        confetti()
        return newWinner
      })
    }else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const checkEndGame = (board) => {
    return board.every((square) => square !== null)
  }

  const resetGame = () => {
    setWinner(null)
    setTurn(TURNS.o)
    setBoard(initialBoardState)
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>
        Nuevo juego
      </button>
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
      <Winner winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
