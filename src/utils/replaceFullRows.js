export const allRowCellsLocked = row => row.every(cell => cell.locked)
export const createEmptyRow = (board, index) =>
  [...Array(board[0].length).keys()].map(x => ({
    color: "black",
    index: { x, y: index },
  }))

export const findLockedIndexes = board =>
  board
    .map((row, index) => {
      if (allRowCellsLocked(row)) {
        return index
      }
      return false
    })
    .filter(Boolean)

export const removeLockedRows = board => {
  const indexToRemove = board.findIndex(allRowCellsLocked)
  const newBoard = board.slice()
  newBoard.splice(indexToRemove, 1)
  const anotherIndexToRemove = newBoard.findIndex(allRowCellsLocked)
  if (anotherIndexToRemove !== -1) {
    return removeLockedRows(newBoard)
  }
  return newBoard
}

export const updateBoardIndexes = (board, lockedIndexes) => {
  const updatedBoard = board.map((row, index) => {
    let count = 0
    lockedIndexes.forEach(i => {
      if (index < i) {
        count++
      }
    })
    return row.map(cell => ({
      ...cell,
      index: { x: cell.index.x, y: cell.index.y + count },
    }))
  })
  return updatedBoard
}

export const replaceFullRows = (board = [], lockedIndexes = []) => {
  if (!board.some(allRowCellsLocked)) {
    return board
  }

  const updatedBoard = updateBoardIndexes(board, lockedIndexes)
  const newBoard = removeLockedRows(updatedBoard)
  const removedCount = lockedIndexes.length

  for (let i = 0; i < removedCount; i++) {
    const emptyRow = createEmptyRow(board, removedCount - (1 + i))
    newBoard.unshift(emptyRow)
  }
  return newBoard
}
