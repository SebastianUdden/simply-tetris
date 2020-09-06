import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { TETROMINOS } from "../constants/tetrominos"
import {
  getColor,
  randomProperty,
  shiftY,
  shiftX,
  checkIsValidYPosition,
  checkIsValidXPosition,
  updateBoard,
  lockBoard,
  showFullRows,
  getScore,
  getSpeed,
} from "../utils"

import { replaceFullRows, findLockedIndexes } from "../utils/replaceFullRows"
import { useKeyboardEvent } from "../hooks/useKeyboardEvent"

const CELL_SIZE = 25
const DEFAULT_SPEED = 600
const END_GAME_COUNT = -4

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin-bottom: 20px;
`
const OuterBoard = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const InnerBoard = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${p => p.cellSize + 2}px;
`
const Row = styled.div`
  display: flex;
`
const Cell = styled.div`
  background-color: ${p => p.color};
  width: ${p => p.cellSize}px;
  height: ${p => p.cellSize}px;
  margin: 1px;
  box-shadow: 1px 1px black;
`
const Controller = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Arrow = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  font-size: 30px;
  border: none;
  background-color: #444;
  color: #fff;
  touch-action: manipulation;
  user-select: none;
  :hover {
    cursor: pointer;
    background-color: #777;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 5px 5px;
  width: 100%;
  height: 100%;
`
const Meta = styled.p`
  font-weight: 800;
  font-size: 25px;
  margin: 10px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin: 10px auto;
`

const Level = styled.span`
  border-bottom: 1px solid orange;
`
const Score = styled.span`
  border-bottom: 1px solid orange;
`

const getCellSize = () => {
  if (typeof window === "undefined") return CELL_SIZE
  return window.innerHeight / 50
}

const audio =
  typeof window !== "undefined" &&
  new Audio(
    "https://ia800504.us.archive.org/33/items/TetrisThemeMusic/Tetris.mp3"
  )

const fadeIn = () => {
  audio.play()
  const fadeInAudio = setInterval(() => {
    if (audio.volume < 0.95) {
      audio.volume += 0.05
      return
    }
    clearInterval(fadeInAudio)
  }, 20)
}

const fadeOut = () => {
  const fadeOutAudio = setInterval(() => {
    if (audio.volume > 0.05) {
      audio.volume -= 0.05
      return
    }
    clearInterval(fadeOutAudio)
    audio.pause()
    audio.volume = 0.0
  }, 20)
}

export default ({ pause, sound, score, onEndGame, onScoreChange }) => {
  const width = 12
  const height = 22
  const innerWidth = 10
  const innerHeight = 20
  const outerRows = [...Array(height).keys()]
  const outerBoard = outerRows.map(y => {
    const columns = [...Array(width).keys()]
    return columns.map(x => ({
      index: { x, y },
      color: getColor({
        x,
        y,
        columns: columns.length,
        rows: outerRows.length,
      }),
    }))
  })
  const innerRows = [...Array(innerHeight).keys()]
  const innerBoard = innerRows.map(y => {
    const columns = [...Array(innerWidth).keys()]
    return columns.map(x => ({
      color: "black",
      index: { x, y },
    }))
  })
  const [board, setBoard] = useState(innerBoard)
  const [count, setCount] = useState(END_GAME_COUNT + 1)
  const [cellSize, setCellSize] = useState(CELL_SIZE)
  const [tetrominoType, setTetrominoType] = useState(randomProperty(TETROMINOS))
  const [tetromino, setTetromino] = useState(tetrominoType.rot1)
  const [rotation, setRotation] = useState("rot1")
  const [x_pos, setX_pos] = useState(4)
  const [clearedRows, setClearedRows] = useState(0)
  const [lvl, setLvl] = useState(1)
  const [speed, setSpeed] = useState(getSpeed(DEFAULT_SPEED, lvl))

  useKeyboardEvent("ArrowUp", () => {
    goUp()
  })
  useKeyboardEvent("ArrowLeft", () => {
    goLeft()
  })
  useKeyboardEvent("ArrowRight", () => {
    goRight()
  })
  useKeyboardEvent("ArrowDown", () => {
    goDown()
  })
  useKeyboardEvent(" ", () => {
    handleRotation()
  })

  const changeXpos = value => {
    const newPos = x_pos + value

    const yPosition = shiftY(tetromino, count)
    const xPosition = shiftX(yPosition, newPos)
    const isValidXPosition = checkIsValidXPosition(xPosition, board)

    if (isValidXPosition) {
      setX_pos(newPos)
    }
  }

  const handleRotation = () => {
    if (tetrominoType.type === "o") return
    if (
      tetrominoType.type === "i" ||
      tetrominoType.type === "s" ||
      tetrominoType.type === "z"
    ) {
      if (rotation === "rot1") {
        setRotation("rot2")
      } else if (rotation === "rot2") {
        setRotation("rot1")
      }
    } else if (
      tetrominoType.type === "t" ||
      tetrominoType.type === "j" ||
      tetrominoType.type === "l"
    ) {
      if (rotation === "rot1") {
        setRotation("rot2")
      } else if (rotation === "rot2") {
        setRotation("rot3")
      } else if (rotation === "rot3") {
        setRotation("rot4")
      } else if (rotation === "rot4") {
        setRotation("rot1")
      }
    }
  }

  const setToDefault = () => {
    setRotation("rot1")
    setTetrominoType(randomProperty(TETROMINOS))
    setCount(END_GAME_COUNT + 1)
    setX_pos(4)
    setSpeed(getSpeed(DEFAULT_SPEED, lvl))
  }

  const goUp = () => setSpeed(0.1)
  const goLeft = () => changeXpos(-1)
  const goRight = () => changeXpos(1)
  const goDown = () => setCount(count + 1)

  useEffect(() => {
    setLvl(Math.floor(clearedRows / 5) + 1)
  }, [clearedRows])

  useEffect(() => {
    if (!rotation || !tetromino) return
    setTetromino(tetrominoType[rotation])
  }, [tetrominoType, rotation])

  useEffect(() => {
    if (count === END_GAME_COUNT || pause) return
    const yPosition = shiftY(tetromino, count)
    const xPosition = shiftX(yPosition, x_pos)
    const isValidYPosition = checkIsValidYPosition(xPosition, board)
    if (isValidYPosition) {
      const newBoard = updateBoard(board, xPosition)
      setBoard(newBoard)
    } else {
      if (count < END_GAME_COUNT + 3) {
        setCount(END_GAME_COUNT)
        onEndGame()
        return
      }
      setToDefault()
      const yPosition = shiftY(tetromino, count - 1)
      const xPosition = shiftX(yPosition, x_pos)
      const newBoard = lockBoard(board, xPosition)
      const withFullRows = showFullRows(newBoard)
      setBoard(withFullRows)
      setTimeout(() => {
        const lockedIndexes = findLockedIndexes(withFullRows)
        if (lockedIndexes.length) {
          const addScore = getScore(lockedIndexes.length)
          onScoreChange(score + addScore * lvl)
          setClearedRows(clearedRows + lockedIndexes.length)
        }
        const adjustedBoard = replaceFullRows(withFullRows, lockedIndexes)
        setBoard(adjustedBoard)
      }, speed)
    }
  }, [pause, x_pos, count, speed])

  useEffect(() => {
    if (count === END_GAME_COUNT || pause) return
    const timer = setTimeout(() => {
      if (count === 20) {
        setCount(END_GAME_COUNT + 1)
      } else {
        setCount(count + 1)
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [pause, count, speed])

  useEffect(() => {
    if (sound) {
      fadeIn()
      return
    }
    fadeOut()
  }, [sound])

  useEffect(() => {
    audio.loop = true
    audio.volume = 0.0
    audio.play()

    setCellSize(getCellSize())
    const timer = setTimeout(() => {
      setCount(0)
    }, speed)
    return () => {
      clearTimeout(timer)
      const fadeOutAudio = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05
          return
        }
        clearInterval(fadeOutAudio)
        audio.pause()
        audio.volume = 0.0
        audio.currentTime = 0
      }, 200)
    }
  }, [])

  return (
    <>
      <Meta>
        <Level>Lvl {lvl}</Level>
        <Score>{score}</Score>
      </Meta>
      <Wrapper>
        <OuterBoard>
          {outerBoard.map(row => (
            <Row>
              {row.map(cell => (
                <Cell {...cell} cellSize={cellSize} />
              ))}
            </Row>
          ))}
        </OuterBoard>
        <InnerBoard cellSize={cellSize}>
          {board.map(row => (
            <Row>
              {row.map(cell => (
                <Cell {...cell} cellSize={cellSize} />
              ))}
            </Row>
          ))}
        </InnerBoard>
        <Controller>
          <Column>
            <Arrow onClick={goLeft}>{"Left"}</Arrow>
          </Column>
          <Column>
            <Arrow onClick={goUp}>{"Up"}</Arrow>
            <Arrow onClick={handleRotation}>{"Rotate"}</Arrow>
            <Arrow onClick={goDown}>{"Down"}</Arrow>
          </Column>
          <Column>
            <Arrow onClick={goRight}>{"Right"}</Arrow>
          </Column>
        </Controller>
      </Wrapper>
    </>
  )
}
