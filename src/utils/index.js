export const getColor = ({ x, y, columns, rows }) => {
  if (y === 0 || y === rows - 1) return "grey"
  if (x === 0 || x === columns - 1) return "grey"
  return "black"
}

export const updateBoard = (board, blocks) => {
  return board.map(row =>
    row.map(cell => {
      const match = blocks.find(
        c => c.index.x === cell.index.x && c.index.y === cell.index.y
      )
      return match || { ...cell, color: !cell.locked ? "black" : cell.color }
    })
  )
}

export const lockBoard = (board, blocks) =>
  board.map(row =>
    row.map(cell => {
      const match = blocks.find(
        c => c.index.x === cell.index.x && c.index.y === cell.index.y
      )
      return match ? { ...match, locked: true } : cell
    })
  )

export const showFullRows = board =>
  board.map(row => {
    const fullRow = row.every(cell => cell.locked)
    if (fullRow) {
      return row.map(cell => ({ ...cell, color: "white", moved: true }))
    }
    return row
  })

export const shiftX = (blocks, x) =>
  blocks.map(({ index, color }) => ({
    color,
    index: { x: index.x + x, y: index.y },
  }))

export const shiftY = (blocks, y) =>
  blocks.map(({ index, color }) => ({
    color,
    index: { x: index.x, y: index.y + y },
  }))

export const randomProperty = obj => {
  const keys = Object.keys(obj)
  return obj[keys[(keys.length * Math.random()) << 0]]
}

export const checkIsValidYPosition = (blocks, board) => {
  const yOutside = blocks.some(({ index }) => index.y === board.length)
  const occupied = board.some(row =>
    row.some(cell =>
      blocks.some(
        ({ index }) =>
          index.x === cell.index.x && index.y === cell.index.y && cell.locked
      )
    )
  )
  return !yOutside && !occupied
}

export const checkIsValidXPosition = (blocks, board) => {
  const xOutside = blocks.some(
    ({ index }) => index.x < 0 || index.x > board[0].length - 1
  )
  const occupied = board.some(row =>
    row.some(cell =>
      blocks.some(
        ({ index }) =>
          index.x === cell.index.x && index.y === cell.index.y && cell.locked
      )
    )
  )
  return !xOutside && !occupied
}

export const getScore = removedCount => {
  if (removedCount === 1) return 40
  if (removedCount === 2) return 100
  if (removedCount === 3) return 300
  if (removedCount === 4) return 1200
}
