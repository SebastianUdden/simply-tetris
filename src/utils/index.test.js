const { getScore, getSpeed } = require(".")
const DEFAULT_SPEED = 1000

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

test("speed at level 1 should increase by 0", () => {
  const SPEED = 1000
  const result = getSpeed(DEFAULT_SPEED, 1)
  expect(result).toBe(SPEED)
})
test("speed at level 2 should increase by 100", () => {
  const SPEED = 900
  const result = getSpeed(DEFAULT_SPEED, 2)
  expect(result).toBe(SPEED)
})
test("speed at level 3 should increase by 95", () => {
  const SPEED = 805
  const result = getSpeed(DEFAULT_SPEED, 3)
  expect(result).toBe(SPEED)
})
test("speed at level 4 should increase by 90", () => {
  const SPEED = 715
  const result = getSpeed(DEFAULT_SPEED, 4)
  expect(result).toBe(SPEED)
})
test("speed at level 5 should increase by 85", () => {
  const SPEED = 630
  const result = getSpeed(DEFAULT_SPEED, 5)
  expect(result).toBe(SPEED)
})
test("speed at level 6 should increase by 80", () => {
  const SPEED = 550
  const result = getSpeed(DEFAULT_SPEED, 6)
  expect(result).toBe(SPEED)
})
test("speed at level 7 should increase by 75", () => {
  const SPEED = 475
  const result = getSpeed(DEFAULT_SPEED, 7)
  expect(result).toBe(SPEED)
})
test("speed at level 8 should increase by 70", () => {
  const SPEED = 405
  const result = getSpeed(DEFAULT_SPEED, 8)
  expect(result).toBe(SPEED)
})
test("speed at level 9 should increase by 65", () => {
  const SPEED = 345
  const result = getSpeed(DEFAULT_SPEED, 9)
  expect(result).toBe(SPEED)
})
test("speed at level 10 should increase by 60", () => {
  const SPEED = 285
  const result = getSpeed(DEFAULT_SPEED, 10)
  expect(result).toBe(SPEED)
})
test("speed at level 11 should increase by 55", () => {
  const SPEED = 230
  const result = getSpeed(DEFAULT_SPEED, 11)
  expect(result).toBe(SPEED)
})
test("speed at level 12 should increase by 50", () => {
  const SPEED = 180
  const result = getSpeed(DEFAULT_SPEED, 12)
  expect(result).toBe(SPEED)
})
test("speed at level 13 should increase by 45", () => {
  const SPEED = 135
  const result = getSpeed(DEFAULT_SPEED, 13)
  expect(result).toBe(SPEED)
})
test("speed at level 14 should increase by 40", () => {
  const SPEED = 95
  const result = getSpeed(DEFAULT_SPEED, 14)
  expect(result).toBe(SPEED)
})
test("speed at level 15 should increase by 35", () => {
  const SPEED = 60
  const result = getSpeed(DEFAULT_SPEED, 15)
  expect(result).toBe(SPEED)
})
test("speed at level 16 should increase by 10", () => {
  const SPEED = 50
  const result = getSpeed(DEFAULT_SPEED, 16)
  expect(result).toBe(SPEED)
})
test("speed at level 17 should increase by 10", () => {
  const SPEED = 40
  const result = getSpeed(DEFAULT_SPEED, 17)
  expect(result).toBe(SPEED)
})
test("speed at level 18 should increase by 10", () => {
  const SPEED = 30
  const result = getSpeed(DEFAULT_SPEED, 18)
  expect(result).toBe(SPEED)
})
test("speed at level 19 should increase by 10", () => {
  const SPEED = 20
  const result = getSpeed(DEFAULT_SPEED, 19)
  expect(result).toBe(SPEED)
})
test("speed at level 20 should increase by 10", () => {
  const SPEED = 10
  const result = getSpeed(DEFAULT_SPEED, 20)
  expect(result).toBe(SPEED)
})
