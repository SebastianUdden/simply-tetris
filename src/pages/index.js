import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Board from "../components/Board"
import Menu from "../components/Menu"
import EnterHighScore from "../components/EnterHighScore"

const Container = styled.div`
  margin: 0 auto;
  padding: 0.5rem;
  max-width: 500px;
  max-height: 500px;
  text-align: center;
`
const WrapWord = styled.span`
  border-bottom: 1px solid ${p => p.color};
`
const H1 = styled.h1`
  color: #fefefe;
  text-align: center;
`
const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin: 5px;
  font-size: large;
  border: none;
  background-color: #444;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #777;
  }
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`

const getHighScores = () => {
  if (typeof window === "undefined") return

  const highScores = localStorage.getItem("highscores")
  return highScores ? JSON.parse(highScores) : []
}

export default () => {
  const [showTab, setShowTab] = useState("menu")
  const [pause, setPause] = useState(false)
  const [score, setScore] = useState(0)
  const [highScores, setHighScores] = useState(getHighScores)

  const handleEndGame = () => {
    setShowTab("enterHighScore")
  }

  useEffect(() => {
    localStorage.setItem("highscores", JSON.stringify(highScores))
  }, [highScores])

  return (
    <Container>
      <H1>
        Simply<WrapWord color="orange">Tetris</WrapWord>
      </H1>
      {showTab === "tetris" && (
        <>
          <Board
            score={score}
            pause={pause}
            onScoreChange={score => setScore(score)}
            onEndGame={handleEndGame}
          />
          <Buttons>
            <Button
              id="restart"
              onClick={() => {
                handleEndGame()
                setTimeout(() => setShowTab("tetris"), 100)
              }}
            >
              Restart
            </Button>
            <Button id="pause" onClick={() => setPause(!pause)}>
              {pause ? "Play" : "Pause"}
            </Button>
            <Button id="quit" onClick={handleEndGame}>
              Quit
            </Button>
          </Buttons>
        </>
      )}
      {showTab === "menu" && (
        <Menu
          highScores={highScores}
          onClick={() => {
            setShowTab("tetris")
            setScore(0)
          }}
        />
      )}
      {showTab === "enterHighScore" && (
        <EnterHighScore
          score={score}
          highScores={highScores}
          onSubmit={newHighScores => {
            setShowTab("menu")
            setHighScores(newHighScores)
          }}
        />
      )}
    </Container>
  )
}
