import { COMBOS, COLORS } from '.././constants'
import confetti from "canvas-confetti";

export const checkWinner = (newBoard) => {
  for (const way of COMBOS) {
    const [a, b, c] = way
    if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
      return newBoard[a]
    }
  }

  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}

export const celebrity = () => {
  confetti({
    particleCount: 200,
    spread: 200,
    colors: COLORS
  });
}