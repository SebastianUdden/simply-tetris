import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Button = styled.button`
  margin: 5px 0 10px;
  padding: 1rem 3rem;
  font-size: large;
  border: none;
  background-color: #444;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #777;
  }
`

const Title = styled.h2`
  border-bottom: 1px solid white;
  text-align: left;
  padding: 5px;
`

const HighScores = styled.div`
  min-width: 300px;
`

const HighScore = styled.p`
  color: #444;
  font-size: 20px;
  margin: 5px 0;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  color: white;
  border-bottom: 1px solid #444;
`

const Name = styled.span``
const Score = styled.span`
  color: orange;
`

export default ({ onClick, highScores = [] }) => {
  const MAX = 10
  const maxLength = highScores.length < MAX ? highScores.length : MAX
  return (
    <Wrapper>
      <Button id="play" onClick={onClick}>
        Play
      </Button>
      {highScores.length !== 0 && (
        <HighScores>
          <Title>High-score</Title>
          {highScores.slice(0, maxLength).map(({ name, score }) => (
            <HighScore>
              <Name>{name}</Name>
              <Score>{score}</Score>
            </HighScore>
          ))}
        </HighScores>
      )}
    </Wrapper>
  )
}
