import { COMBOS } from '.././constants'

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
