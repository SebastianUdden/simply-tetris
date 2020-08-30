import React, { useState } from "react"
import styled from "styled-components"

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HighScore = styled.p`
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  border-bottom: 1px solid white;
`
const Name = styled.span``
const Score = styled.span`
  color: orange;
`

const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  width: 100%;
  max-width: 95%;
`

const Button = styled.button`
  margin: 20px 0;
  padding: 1rem 3rem;
  width: 100%;
  font-size: large;
  border: none;
  background-color: #444;
  color: white;
  :hover {
    cursor: pointer;
    background-color: #777;
  }
`

export default ({ highScores, score, onSubmit }) => {
  const [value, setValue] = useState("")
  return (
    <Form>
      <HighScore>
        <Name>You score: </Name>
        <Score>{score}</Score>
      </HighScore>
      <Input onChange={e => setValue(e.target.value)} value={value} />
      <Button
        onClick={() => {
          const newObj = { name: value, score }
          const newHighScores = [...highScores, newObj].sort(
            (a, b) => b.score - a.score
          )

          onSubmit(value ? newHighScores : highScores)
        }}
      >
        Submit
      </Button>
    </Form>
  )
}
