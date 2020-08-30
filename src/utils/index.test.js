const { getScore } = require(".")

test("one row should return 40 points", () => {
  const POINTS = 40
  const result = getScore(1)
  expect(result).toBe(POINTS)
})
test("two rows should return 100 points", () => {
  const POINTS = 100
  const result = getScore(2)
  expect(result).toBe(POINTS)
})
test("three rows should return 300 points", () => {
  const POINTS = 300
  const result = getScore(3)
  expect(result).toBe(POINTS)
})
test("four rows should return 1200 points", () => {
  const POINTS = 1200
  const result = getScore(4)
  expect(result).toBe(POINTS)
})
